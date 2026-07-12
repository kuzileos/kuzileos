Sentry.onLoad(function() {
  Sentry.init({
    dsn: "https://a7e672348c8373beac3da8d6ce6c7a64@o4511723660902401.ingest.de.sentry.io/4511723680170064",
    environment: "production",
    tracesSampleRate: 1.0,
  });
});
