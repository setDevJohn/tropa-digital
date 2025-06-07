module.exports = {
  apps: [
    {
      name: "teste_tropa_digital",
      script: "npm",
      args: "run preview",
      env: {
        NODE_ENV: "production",
        PORT: 4005,
        HOST: '0.0.0.0'
      }
    }
  ]
};
