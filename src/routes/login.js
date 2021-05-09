const express = require("express");
const passport = require("passport");
const router = express.Router();
const LdapStrategy = require("passport-ldapauth");
const fs = require("fs");

passport.use(
  new LdapStrategy({
    server: {
      url: process.env.LDAP_API,
      bindDN: "ou=People,ou=st,dc=sit,dc=kmutt,dc=ac,dc=th",
      searchBase: "dc=sit,dc=kmutt,dc=ac,dc=th",
      searchFilter: "(uid={{username}})",
    //   tlsOptions: {
    //     ca: [fs.readFileSync("../../cacert.pem")],
    //   },
    },
  })
);

router.post(
  "/login",
  passport.authenticate("ldapauth", { session: false }),
  (req, res) => {
    res.send({ status: "ok" });
  }
);

module.exports = router;
