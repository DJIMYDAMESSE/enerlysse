/* ENERLYSSE — scripts du site (aucune dépendance) */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  /* ---------- Sous-menu "Expertises" ---------- */
  document.querySelectorAll(".has-sub > button").forEach(function (btn) {
    var item = btn.parentElement;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Survol sur ordinateur
    item.addEventListener("mouseenter", function () {
      if (window.matchMedia("(min-width: 1181px)").matches) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
    item.addEventListener("mouseleave", function () {
      if (window.matchMedia("(min-width: 1181px)").matches) { item.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  });
  document.addEventListener("click", function () {
    if (window.matchMedia("(min-width: 1181px)").matches) {
      document.querySelectorAll(".has-sub.open").forEach(function (el) {
        el.classList.remove("open");
        el.querySelector("button").setAttribute("aria-expanded", "false");
      });
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".has-sub.open").forEach(function (el) { el.classList.remove("open"); });
      if (nav && nav.classList.contains("open")) { toggle.click(); }
    }
  });

  /* ---------- Vidéo de présentation ----------
     1) data-youtube="IDENTIFIANT" sur .video-frame : lecteur YouTube
     2) sinon : fichier dans assets/video/
     3) sinon : photo de remplacement (sans faux bouton lecture) */
  document.querySelectorAll(".video-frame").forEach(function (frame) {
    var yt = (frame.getAttribute("data-youtube") || "").trim();
    var video = frame.querySelector("video");
    if (yt) {
      var m = yt.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
      var id = m ? m[1] : yt;
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?rel=0";
      iframe.title = "Vidéo de présentation Enerlysse";
      iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      if (video) video.remove();
      var fb = frame.querySelector(".video-fallback");
      if (fb) fb.remove();
      frame.appendChild(iframe);
      return;
    }
    if (!video) return;
    var sources = video.querySelectorAll("source");
    var fail = function () { frame.classList.add("no-video"); };
    if (sources.length) sources[sources.length - 1].addEventListener("error", fail);
    video.addEventListener("error", fail);
    if (video.networkState === 3) fail(); // NETWORK_NO_SOURCE
  });

  /* ---------- Filtres des réalisations ---------- */
  var filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cat = btn.dataset.filter;
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      document.querySelectorAll(".project").forEach(function (p) {
        p.hidden = !(cat === "all" || p.dataset.cat === cat);
      });
    });
  });

  /* ---------- Formulaire de contact ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var params = new URLSearchParams(window.location.search);
    var sujet = params.get("sujet");
    if (sujet && form.elements.projet) form.elements.projet.value = sujet;

    var validate = function (field) {
      var wrap = field.closest(".field");
      if (!wrap) return true;
      var ok = field.checkValidity();
      wrap.classList.toggle("invalid", !ok);
      return ok;
    };
    form.querySelectorAll("input, select, textarea").forEach(function (f) {
      f.addEventListener("blur", function () { if (f.value) validate(f); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true, first = null;
      form.querySelectorAll("[required]").forEach(function (f) {
        if (f.type === "checkbox") {
          if (!f.checked) { valid = false; first = first || f; }
          return;
        }
        if (!validate(f)) { valid = false; first = first || f; }
      });
      status.className = "form-status";
      if (!valid) {
        status.textContent = "Certains champs sont à compléter. Vérifiez les champs signalés en rouge.";
        status.classList.add("ko");
        if (first) first.focus();
        return;
      }

      var data = new FormData(form);
      var endpoint = form.getAttribute("action");

      // 1) Envoi vers un service de formulaire (Formspree, Getform, script PHP...) si configuré
      if (endpoint && endpoint.indexOf("VOTRE_ID") === -1 && endpoint !== "#") {
        var btn = form.querySelector("button[type=submit]");
        btn.disabled = true;
        fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error();
            form.reset();
            status.textContent = "Message envoyé. Nous vous rappelons sous 48 h ouvrées.";
            status.classList.add("ok");
          })
          .catch(function () {
            status.textContent = "L'envoi a échoué. Écrivez-nous à contact@enerlysse.fr ou appelez le 07 65 65 07 77.";
            status.classList.add("ko");
          })
          .finally(function () { btn.disabled = false; });
        return;
      }

      // 2) Sinon : ouverture de la messagerie de l'internaute
      var body =
        "Nom : " + data.get("nom") + "\n" +
        "Téléphone : " + data.get("telephone") + "\n" +
        "E-mail : " + data.get("email") + "\n" +
        "Code postal : " + (data.get("cp") || "-") + "\n" +
        "Profil : " + data.get("profil") + "\n" +
        "Projet : " + data.get("projet") + "\n\n" +
        data.get("message");
      window.location.href = "mailto:contact@enerlysse.fr?subject=" +
        encodeURIComponent("Demande de contact — " + data.get("projet")) +
        "&body=" + encodeURIComponent(body);
      status.textContent = "Votre messagerie s'ouvre avec le message prérempli. Il ne reste qu'à l'envoyer.";
      status.classList.add("ok");
    });
  }

  /* ---------- Année du pied de page ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
