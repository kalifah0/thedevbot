
module.exports = {
  name: "hack",
  alias: ["prankhack"],
  description: "Simulate hacking for fun",
  category: "fun",
  async run({ msg, edit }) {
    let stages = [
      "🔍 Initializing hack sequence...",
      "📡 Bypassing firewall...",
      "🛠 Fetching sensitive data...",
      "💾 Downloading files...",
      "✅ Hack complete! Data secured."
    ];

    for (let i = 0; i < stages.length; i++) {
      await edit(stages[i]);
      await new Promise((res) => setTimeout(res, 1300));
    }
  },
};
