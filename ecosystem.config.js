module.exports = {
  apps: [
    {
      name: "whatsapp-clone", // Give your app a name
      script: "node_modules/next/dist/bin/next", // Path to the Next.js binary
      args: "start", // Arguments to be passed to the script (start in this case)
      instances: "max", // Number of instances to be launched, use "max" to match the number of CPU cores
      exec_mode: "cluster", // Run in cluster mode for better performance
      autorestart: true, // Restart the app automatically if it crashes
      watch: false, // If true, PM2 will watch for file changes and restart the app
      max_memory_restart: "1G", // Max memory allowed for the app, it will be restarted if it exceeds this limit
    },
  ],
};
