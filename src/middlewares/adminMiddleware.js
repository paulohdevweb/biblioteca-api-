function verificarAdm(req, res, next) {
  const admin = req.headers.admin;

  if (admin) {
    next();
  } else {
    res.status(403).json({
      mensagem: "Acesso não permitido.",
    });
  }
}
export default verificarAdm;
