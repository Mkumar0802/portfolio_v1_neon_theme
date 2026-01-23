import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaGithub, FaTerminal } from "react-icons/fa";
import { Link } from "react-router-dom";

const LocalLLMChat = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground">
            <Helmet>
                <title>Chat with Ollama - Local LLM Chat UI | Muthu Kumar K</title>
                <meta name="description" content="A lightweight chat UI built using Streamlit that lets you chat with local LLM models running via Ollama." />
            </Helmet>

            {/* Progress Bar / Scroll Watcher */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-muted/20">
                <div className="h-full bg-gradient-to-r from-neon-blue to-neon-pink w-full origin-left transform scale-x-0 animate-scroll-progress"></div>
            </div>

            <main className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Back Navigation */}
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Article Header */}
                <header className="mb-12 border-b border-primary/20 pb-12">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded-full">
                            AI & ML
                        </span>
                        <span className="px-3 py-1 text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20 rounded-full">
                            Streamlit
                        </span>
                        <span className="px-3 py-1 text-xs font-bold bg-accent/10 text-accent border border-accent/20 rounded-full">
                            Ollama
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-black neon-text-blue mb-6 leading-tight">
                        Chat with Ollama: Local LLM Chat UI with Streamlit
                    </h1>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <span>Jan 23, 2026</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                </header>

                {/* Article Content */}
                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-code:text-accent prose-pre:bg-card prose-pre:border prose-pre:border-primary/20">

                    <div className="bg-card border border-primary/20 rounded-xl p-8 mb-12 shadow-[0_0_50px_rgba(14,165,233,0.1)]">
                        <p className="text-xl leading-relaxed text-foreground/90">
                            This is a lightweight chat UI built using <strong>Streamlit</strong> that lets you chat with local LLM models running via <strong>Ollama</strong>.
                            It supports multiple models like <code>mistral</code>, <code>llama3</code>, <code>sqlcoder:15b</code>, and <code>deepseek-coder-v2</code>,
                            and stores your chat history locally.
                        </p>
                    </div>

                    <h2 className="flex items-center gap-3 text-3xl text-secondary mt-12 mb-6">
                        🚀 Features
                    </h2>
                    <ul className="space-y-3 list-none pl-0">
                        {[
                            "Chat with locally hosted Ollama models",
                            "Support for multiple models via sidebar",
                            "Persistent chat history saved in chat_history.json",
                            "Start new chats and load previous ones anytime",
                            "Simple UI built with Streamlit"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-accent mt-1">✅</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <h2 className="flex items-center gap-3 text-3xl text-secondary mt-12 mb-6">
                        🛠 Prerequisites
                    </h2>

                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Install Python</h3>
                    <p>Make sure Python 3.8+ is installed. Download from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>.</p>

                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Install Ollama</h3>

                    <div className="space-y-6">
                        <div>
                            <p className="mb-2 text-sm text-muted-foreground">On Linux/macOS:</p>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <pre className="relative bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                    <code>curl -fsSL https://ollama.com/install.sh | sh</code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-sm text-muted-foreground">On Windows:</p>
                            <p>Download and install via <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer">https://ollama.com/download</a></p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Pull LLM Models</h3>
                    <p>Download the models you want to use locally:</p>
                    <div className="relative group my-4">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <pre className="relative bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
                            {`ollama pull mistral:latest
ollama pull deepseek-r1:latest
ollama pull deepseek-r1:7b`}
                        </pre>
                    </div>

                    <h2 className="flex items-center gap-3 text-3xl text-secondary mt-12 mb-6">
                        ⚡ Quick Start
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-bold text-foreground">1. Set up Virtual Environment</h4>
                            <div className="bg-muted/30 p-4 rounded-lg border border-white/10">
                                <p className="text-xs text-muted-foreground mb-2">Create env:</p>
                                <code className="block bg-black p-2 rounded mb-3">python -m venv venv</code>

                                <p className="text-xs text-muted-foreground mb-2">Activate (Linux/Mac):</p>
                                <code className="block bg-black p-2 rounded mb-3">source venv/bin/activate</code>

                                <p className="text-xs text-muted-foreground mb-2">Activate (Windows):</p>
                                <code className="block bg-black p-2 rounded">venv\Scripts\activate</code>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-foreground">2. Install Dependencies</h4>
                            <div className="bg-muted/30 p-4 rounded-lg border border-white/10 h-[calc(100%-2rem)]">
                                <p className="text-xs text-muted-foreground mb-2">Install packages:</p>
                                <code className="block bg-black p-2 rounded">pip install ollama streamlit requests</code>
                            </div>
                        </div>
                    </div>

                    <h2 className="flex items-center gap-3 text-3xl text-gradient-primary mt-12 mb-6">
                        ▶️ Running the App
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Step 1: Start Ollama Server</h4>
                            <pre className="bg-black rounded-lg p-4 border-l-4 border-accent">
                                <code>ollama serve</code>
                            </pre>
                        </div>

                        <div>
                            <h4 className="font-bold text-foreground mb-2">Step 2: Launch UI</h4>
                            <pre className="bg-black rounded-lg p-4 border-l-4 border-primary">
                                <code>streamlit run chat_ui.py</code>
                            </pre>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl text-center">
                        <p className="text-accent font-bold mb-2">🎉 Success!</p>
                        <p className="text-muted-foreground">Visit your local URL to start chatting:</p>
                        <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-6 py-2 bg-accent text-accent-foreground rounded-full font-bold hover:opacity-90 transition-opacity">
                            http://localhost:8501
                        </a>
                    </div>

                </article>
            </main>
        </div>
    );
};

export default LocalLLMChat;
