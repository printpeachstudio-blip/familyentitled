(function() {
  var GA_ID = 'G-7CQBRS0KJ1';
  var CONSENT_KEY = 'fe_cookie_consent';

  function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function setConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
    var b = document.getElementById('cookie-banner');
    if (b) b.style.display = 'none';
    if (value === 'accepted') loadGA();
  }

  window.feAcceptCookies = function() { setConsent('accepted'); };
  window.feDeclineCookies = function() { setConsent('declined'); };

  function init() {
    var consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') { loadGA(); return; }
    if (consent === 'declined') { return; }
    var b = document.getElementById('cookie-banner');
    if (b) b.style.display = 'flex';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
