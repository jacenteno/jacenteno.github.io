// Cambio de tema
const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

function updateThemeIcon(theme) {
  const sunIcon = document.querySelector('.theme-toggle use[href="#icon-sun"]');
  const moonIcon = document.querySelector('.theme-toggle use[href="#icon-moon"]');
  
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
    
    // Cambiar variables CSS para el tema claro
    if (next === 'light') {
      html.style.setProperty('--bg-dark', '#ffffff');
      html.style.setProperty('--bg-card', '#f8f9fa');
      html.style.setProperty('--bg-elevated', '#e9ecef');
      html.style.setProperty('--text-primary', '#212529');
      html.style.setProperty('--text-secondary', '#6c757d');
      html.style.setProperty('--border', 'rgba(0, 0, 0, 0.1)');
    } else {
      html.style.setProperty('--bg-dark', '#0a0e27');
      html.style.setProperty('--bg-card', '#151932');
      html.style.setProperty('--bg-elevated', '#1a1f3a');
      html.style.setProperty('--text-primary', '#e4e4e7');
      html.style.setProperty('--text-secondary', '#a1a1aa');
      html.style.setProperty('--border', 'rgba(255, 255, 255, 0.1)');
    }
  });
}

// Restaurar tema
const stored = localStorage.getItem('theme');
const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = stored || 'dark'; // Default a dark theme
html.setAttribute('data-theme', initialTheme);

// Aplicar tema inicial
if (initialTheme === 'light') {
  html.style.setProperty('--bg-dark', '#ffffff');
  html.style.setProperty('--bg-card', '#f8f9fa');
  html.style.setProperty('--bg-elevated', '#e9ecef');
  html.style.setProperty('--text-primary', '#212529');
  html.style.setProperty('--text-secondary', '#6c757d');
  html.style.setProperty('--border', 'rgba(0, 0, 0, 0.1)');
}

updateThemeIcon(initialTheme);

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Prefetch links al pasar el ratón (mejora 100 ms en hover)
const links = document.querySelectorAll('a[href^="http"]');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const hint = document.createElement('link');
    hint.rel = 'prefetch';
    hint.href = link.href;
    document.head.appendChild(hint);
  });
});

// Chatbot Functionality
class ChatBot {
  constructor() {
    console.log('Construyendo ChatBot...');
    
    this.widget = document.getElementById('chatbot-widget');
    this.toggle = document.getElementById('chatbot-toggle');
    this.close = document.getElementById('chat-close');
    this.input = document.getElementById('chat-input');
    this.send = document.getElementById('chat-send');
    this.messages = document.getElementById('chat-messages');
    this.isOpen = false;
    
    // Verificar elementos
    if (!this.widget || !this.toggle || !this.close || !this.input || !this.send || !this.messages) {
      console.error('Error: Algunos elementos del chatbot no se encontraron');
      console.log('Widget:', this.widget);
      console.log('Toggle:', this.toggle);
      console.log('Close:', this.close);
      console.log('Input:', this.input);
      console.log('Send:', this.send);
      console.log('Messages:', this.messages);
      return;
    }
    
    console.log('Todos los elementos encontrados, inicializando...');
    this.init();
    window.chatbotInitialized = true;
  }
  
  init() {
    console.log('Inicializando event listeners...');
    
    this.toggle.addEventListener('click', (e) => {
      console.log('Toggle clicked');
      e.preventDefault();
      e.stopPropagation();
      this.toggleChat();
    });
    
    // Evento adicional por si el primero falla
    this.toggle.onclick = (e) => {
      console.log('Toggle onclick triggered');
      e.preventDefault();
      this.toggleChat();
    };
    
    this.close.addEventListener('click', (e) => {
      console.log('Close clicked');
      e.preventDefault();
      this.closeChat();
    });
    
    this.send.addEventListener('click', (e) => {
      console.log('Send clicked');
      e.preventDefault();
      this.sendMessage();
    });
    
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        console.log('Enter pressed');
        e.preventDefault();
        this.sendMessage();
      }
    });
    
    console.log('ChatBot inicializado correctamente');
    
    // Test manual para verificar funcionalidad
    console.log('Probando toggle manualmente en 2 segundos...');
    setTimeout(() => {
      console.log('Ejecutando test automático del chatbot...');
      this.toggleChat();
    }, 2000);
  }
  
  toggleChat() {
    console.log('Toggling chat, current state:', this.isOpen);
    this.isOpen = !this.isOpen;
    this.widget.classList.toggle('hidden', !this.isOpen);
    console.log('Chat now:', this.isOpen ? 'open' : 'closed');
  }
  
  closeChat() {
    console.log('Closing chat');
    this.isOpen = false;
    this.widget.classList.add('hidden');
  }
  
  async sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;
    
    this.addMessage(message, 'user');
    this.input.value = '';
    
    this.showTyping();
    const response = await this.getAIResponse(message);
    this.hideTyping();
    this.addMessage(response, 'bot');
  }
  
  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    this.messages.appendChild(messageDiv);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
  
  showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    this.messages.appendChild(typingDiv);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
  
  hideTyping() {
    const typing = this.messages.querySelector('.typing-indicator');
    if (typing) typing.remove();
  }
  
  async getAIResponse(message) {
    // Respuestas predefinidas basadas en el portafolio de Jorge
    const responses = {
      swift: "Jorge tiene amplia experiencia en Swift y SwiftUI. Ha desarrollado aplicaciones iOS nativas como iOsSig, un cliente ERP móvil con arquitectura MVVM y Combine para reactividad.",
      kotlin: "Domina Kotlin y Jetpack Compose para desarrollo Android nativo. Ha trabajado en proyectos como SIG Platform, un CRM comercial con procesamiento asíncrono.",
      django: "Experto en Django y Django REST Framework. Ha creado backends escalables como DigiPromo, una plataforma de gestión de promociones con PostgreSQL y JWT.",
      ia: "Especializado en integración de IA/LLMs usando LangChain, Ollama, DeepSeek y APIs como Gemini. Crea experiencias inteligentes en aplicaciones móviles y web.",
      experiencia: "Jorge tiene 5+ años de experiencia como desarrollador Full-Stack, desde Junior Developer hasta su rol actual como Freelance especializado en IA.",
      disponibilidad: "Actualmente disponible para nuevos proyectos. Tiempo de respuesta < 2 horas, timezone EST (UTC-5). Acepta proyectos de apps nativas, backends y consultoría IA.",
      herramientas: "Usa Xcode para iOS, Android Studio para Android, VS Code para backend, Postman para APIs, Docker para containerización y Figma para diseño.",
      clientes: "Mantiene 100% de satisfacción con sus clientes. Se enfoca en calidad sobre cantidad, asegurando proyectos exitosos y relaciones duraderas.",
      contacto: "Puedes contactarlo por email: jorge.centeno@floppyfilms.com, WhatsApp: +507 6619-4728 o agendar una reunión directa.",
      proyectos: "Ha completado proyectos como iOsSig (iOS ERP), DigiPromo (plataforma de promociones) y SIG Platform (CRM comercial). Todos con tecnologías nativas."
    };
    
    // Buscar palabras clave en el mensaje
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('swift') || lowerMessage.includes('ios')) {
      return responses.swift;
    } else if (lowerMessage.includes('kotlin') || lowerMessage.includes('android')) {
      return responses.kotlin;
    } else if (lowerMessage.includes('django') || lowerMessage.includes('python') || lowerMessage.includes('backend')) {
      return responses.django;
    } else if (lowerMessage.includes('ia') || lowerMessage.includes('llm') || lowerMessage.includes('gemini') || lowerMessage.includes('inteligencia')) {
      return responses.ia;
    } else if (lowerMessage.includes('experiencia') || lowerMessage.includes('años')) {
      return responses.experiencia;
    } else if (lowerMessage.includes('disponible') || lowerMessage.includes('tiempo') || lowerMessage.includes('horario')) {
      return responses.disponibilidad;
    } else if (lowerMessage.includes('herramientas') || lowerMessage.includes('xcode') || lowerMessage.includes('setup')) {
      return responses.herramientas;
    } else if (lowerMessage.includes('clientes') || lowerMessage.includes('satisfacción')) {
      return responses.clientes;
    } else if (lowerMessage.includes('contacto') || lowerMessage.includes('email') || lowerMessage.includes('whatsapp')) {
      return responses.contacto;
    } else if (lowerMessage.includes('proyectos') || lowerMessage.includes('portfolio')) {
      return responses.proyectos;
    } else if (lowerMessage.includes('hola') || lowerMessage.includes('hello')) {
      return "¡Hola! Soy el asistente de Jorge. Puedo contarte sobre sus tecnologías (Swift, Kotlin, Django, IA), experiencia, disponibilidad y proyectos. ¿Qué te interesa saber?";
    } else {
      return "Puedo ayudarte con información sobre las tecnologías de Jorge (Swift, Kotlin, Django, IA), su experiencia, disponibilidad, herramientas que usa, proyectos realizados y cómo contactarlo. ¿Sobre qué te gustaría saber más?";
    }
  }
}

// Inicializar chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Esperar un poco más para asegurar que todos los elementos estén cargados
  setTimeout(() => {
    const chatbotElements = {
      widget: document.getElementById('chatbot-widget'),
      toggle: document.getElementById('chatbot-toggle'),
      close: document.getElementById('chat-close'),
      input: document.getElementById('chat-input'),
      send: document.getElementById('chat-send'),
      messages: document.getElementById('chat-messages')
    };
    
    // Verificar que todos los elementos existan
    const missingElements = Object.entries(chatbotElements)
      .filter(([key, element]) => !element)
      .map(([key]) => key);
    
    if (missingElements.length > 0) {
      console.error('Elementos del chatbot faltantes:', missingElements);
      return;
    }
    
    console.log('Inicializando chatbot...');
    new ChatBot();
  }, 500);
});

// Función de respaldo para inicializar el chatbot si DOMContentLoaded ya pasó
if (document.readyState === 'loading') {
  // DOM aún cargando
} else {
  // DOM ya está listo
  setTimeout(() => {
    if (!window.chatbotInitialized) {
      console.log('Inicializando chatbot como respaldo...');
      new ChatBot();
      window.chatbotInitialized = true;
    }
  }, 1000);
}