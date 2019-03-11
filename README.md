
# 🚀 Senzoro Landing Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9b9cde6-d8fe-4187-909a-c724e0118a29/deploy-status)](https://app.netlify.com/sites/senzoro-landing/deploys)

## reCAPTCHA

This site uses [react-google-recaptcha](https://github.com/dozoisch/react-google-recaptcha) to render the reCAPTCHA widget.

To make the reCAPTCHA work, you’ll need to do the following:
1. [Sign up for a reCAPTCHA API key pair](http://www.google.com/recaptcha/admin) for your site.
2. [Log in to your Netlify account](https://app.netlify.com), and add the following
environment variables to your site’s Settings > Build & deploy > Build environment variables:
  - `SITE_RECAPTCHA_KEY` with your reCAPTCHA site key.
  - `SITE_RECAPTCHA_SECRET` with your reCAPTCHA secret key.
3. Change the build command for your site to
```
echo -e "GATSBY_SITE_RECAPTCHA_KEY=$SITE_RECAPTCHA_KEY\nGATSBY_SITE_RECAPTCHA_SECRET=$SITE_RECAPTCHA_SECRET" >> .env.production && gatsby build
```
_Note: There’s probably a more elegant way to make the `SITE_RECAPTCHA_KEY` environment variable available to Gatsby in production. This was just the quickest way I found to make it work without having to duplicate the variable_

To see the reCAPTCHA widget locally, add `GATSBY_SITE_RECAPTCHA_KEY=your-reCAPTCHA-API-site-key`
to your local [.env.development](https://www.gatsbyjs.org/docs/environment-variables/) file.
