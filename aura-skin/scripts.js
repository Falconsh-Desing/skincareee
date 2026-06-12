// ==================== PRODUCTOS ====================
const productos = [
    // LIMPIADORES
    { id: 1, nombre: "Gel Limpiador de Aloe Vera", categoria: "limpiadores", precio: 1850, descripcion: "Limpia profundamente sin resecar. Con aloe vera orgánico y manzanilla.", beneficios: "Calma, hidrata, no irrita los ojos", tipoPiel: "Todo tipo de piel", foto: "aloevera.png" },
    { id: 2, nombre: "Espuma Micelar con Niacinamida", categoria: "limpiadores", precio: 2200, descripcion: "Espuma suave que arrastra la suciedad sin frotar. Con niacinamida.", beneficios: "Unifica el tono, limpia en profundidad", tipoPiel: "Piel mixta a grasa", foto: "espuma.png" },
    { id: 3, nombre: "Bálsamo Desmaquillante de Coco", categoria: "limpiadores", precio: 2800, descripcion: "Bálsamo sólido que se derrite con el calor de la piel.", beneficios: "Elimina maquillaje resistente, nutre", tipoPiel: "Todo tipo de piel", foto: "coco.png" },
    { id: 4, nombre: "Leche Limpiadora de Avena", categoria: "limpiadores", precio: 2400, descripcion: "Leche cremosa sin enjuague. Ideal para pieles reactivas.", beneficios: "Calma irritaciones, protege la barrera", tipoPiel: "Piel seca, sensible", foto: "leche.png" },
    { id: 5, nombre: "Agua Micelar Multiefecto", categoria: "limpiadores", precio: 2100, descripcion: "Limpia, desmaquilla y tonifica en un solo paso.", beneficios: "Rápida, no irrita, no requiere enjuague", tipoPiel: "Todos los tipos", foto: "micelar.png" },
    
    // SÉRUMS
    { id: 6, nombre: "Sérum de Vitamina C + Ferúlico", categoria: "serums", precio: 4500, descripcion: "Sérum antioxidante potente que ilumina la piel y reduce manchas.", beneficios: "Antimanchas, antiedad, luminosidad", tipoPiel: "Todo tipo de piel", foto: "vitaminac.jpg" },
    { id: 7, nombre: "Ácido Hialurónico Puro", categoria: "serums", precio: 3800, descripcion: "Atrae la humedad del ambiente a tu piel. Reduce líneas de deshidratación.", beneficios: "Hidratación profunda, rellena arrugas finas", tipoPiel: "Piel seca, madura", foto: "acidohia.jpg" },
    { id: 8, nombre: "Retinol Nocturno (para principiantes)", categoria: "serums", precio: 4200, descripcion: "Retinol encapsulado de liberación lenta. Renueva las células mientras duermes.", beneficios: "Antiedad, mejora la textura", tipoPiel: "Piel normal a grasa", foto: "retinol.jpg" },
    { id: 9, nombre: "Niacinamida + Zinc (control de sebo)", categoria: "serums", precio: 3200, descripcion: "Regula la producción de grasa, reduce poros dilatados y calma el acné activo.", beneficios: "Antiacné, matifica, minimiza poros", tipoPiel: "Piel grasa, mixta, con acné", foto: "niacinamida.jpg" },
    { id: 10, nombre: "Sérum Calmante de Centella Asiática", categoria: "serums", precio: 3900, descripcion: "Ideal para pieles irritadas o con brotes. Centella acelera la cicatrización.", beneficios: "Repara la barrera cutánea, calma el enrojecimiento", tipoPiel: "Piel sensible, reactiva", foto: "centella.jpg" },
    
    // HIDRATANTES
    { id: 11, nombre: "Crema de Cactus y Té Verde", categoria: "hidratantes", precio: 3500, descripcion: "Hidratante diaria ultraligera con extracto de cactus y té verde.", beneficios: "Hidratación ligera, antioxidante", tipoPiel: "Piel normal a mixta", foto: "teverde.png" },
    { id: 12, nombre: "Crema de Manteca de Karité", categoria: "hidratantes", precio: 4000, descripcion: "Crema nutritiva para pieles muy secas o agrietadas.", beneficios: "Nutrición intensa, repara la barrera", tipoPiel: "Piel seca, atópica", foto: "karite.png" },
    { id: 13, nombre: "Mascarilla de Noche Reparadora", categoria: "hidratantes", precio: 4800, descripcion: "Tratamiento nocturno que actúa mientras duermes.", beneficios: "Repara mientras duermes, efecto glow", tipoPiel: "Todos los tipos", foto: "mascarillanoctu.png" },
    { id: 14, nombre: "Gel Hidratante Matificante", categoria: "hidratantes", precio: 3200, descripcion: "Gel-crema sin aceites que hidrata pero deja acabado mate.", beneficios: "Hidrata sin brillo, matifica", tipoPiel: "Piel grasa, mixta", foto: "gelhidra.png" },
    { id: 15, nombre: "Crema de Agua con Escualano", categoria: "hidratantes", precio: 3400, descripcion: "Textura ultraligera que se convierte en agua al contacto con la piel.", beneficios: "Hidratación invisible, no comedogénica", tipoPiel: "Todos los tipos", foto: "agua.png" },
    
    // PROTECTORES SOLARES
    { id: 16, nombre: "Protector Solar SPF 30 (toque seco)", categoria: "protectores", precio: 3900, descripcion: "Bloqueador mineral de amplio espectro. Acabado mate.", beneficios: "Protege sin brillo, no tapa poros", tipoPiel: "Todo tipo de piel", foto: "30prot.jpg" },
    { id: 17, nombre: "Protector Solar SPF 50 en Spray", categoria: "protectores", precio: 4500, descripcion: "Fórmula resistente al agua y sudor. Ideal para actividades al aire libre.", beneficios: "Alta protección, fácil aplicación", tipoPiel: "Todos los tipos", foto: "sprayprot.jpg" },
    { id: 18, nombre: "Protector Solar con Color SPF 35", categoria: "protectores", precio: 4200, descripcion: "Protección solar y maquillaje ligero en uno.", beneficios: "Protege y unifica el tono", tipoPiel: "Todos los tipos", foto: "colorprot.jpg" },
    { id: 19, nombre: "Protector Solar Hidratante SPF 50", categoria: "protectores", precio: 4300, descripcion: "Protege y mantiene la piel hidratada durante horas.", beneficios: "Protección alta + hidratación", tipoPiel: "Piel seca, sensible", foto: "hidraprot.jpg" },
    
    // MASCARILLAS
    { id: 20, nombre: "Mascarilla de Arcilla Rosa", categoria: "mascarillas", precio: 2500, descripcion: "Mascarilla purificante pero suave. Absorbe toxinas sin resecar.", beneficios: "Purifica, suaviza, aroma relajante", tipoPiel: "Piel grasa, mixta, con acné", foto: "arcilla.png" },
    { id: 21, nombre: "Exfoliante Químico AHA + BHA", categoria: "mascarillas", precio: 3600, descripcion: "Tónico exfoliante que renueva la piel y elimina células muertas.", beneficios: "Renovación celular, previene brotes", tipoPiel: "Piel normal a grasa", foto: "ahc.jpg" },
    { id: 22, nombre: "Mascarilla de Cacao y Colágeno", categoria: "mascarillas", precio: 2800, descripcion: "Mascarilla en crema con cacao puro y colágeno hidrolizado.", beneficios: "Antioxidante, elasticidad, luminosidad", tipoPiel: "Piel madura, seca", foto: "cacao.jpg" },
    { id: 23, nombre: "Mascarilla de Carbón Activado", categoria: "mascarillas", precio: 2900, descripcion: "Mascarilla negra que extrae impurezas y puntos negros.", beneficios: "Limpieza profunda", tipoPiel: "Piel grasa, mixta", foto: "carbon.jpg" },
    { id: 24, nombre: "Parches Hidrogel para Ojos", categoria: "mascarillas", precio: 1500, descripcion: "Parches refrescantes para reducir ojeras y bolsas.", beneficios: "Reduce la hinchazón, hidrata el contorno", tipoPiel: "Todos los tipos", foto: "hidrogel.jpg" },
    
    // ACCESORIOS
    { id: 25, nombre: "Esponja de Silicona", categoria: "accesorios", precio: 800, descripcion: "Esponja antibacterial para limpiador en gel o espuma.", beneficios: "Higiénica, reutilizable, masajea suavemente", tipoPiel: "Todos", foto: "cilicona.jpg" },
    { id: 26, nombre: "Toalla de Microfibra Facial", categoria: "accesorios", precio: 1200, descripcion: "Toalla suave para secar la piel sin frotar ni irritar.", beneficios: "Suave, no irrita, seca rápido", tipoPiel: "Todos", foto: "toalla.jpg" },
    { id: 27, nombre: "Rodillo de Jade", categoria: "accesorios", precio: 2200, descripcion: "Rodillo para drenaje linfático. Mejora la circulación.", beneficios: "Desinflama, drena, relaja", tipoPiel: "Todos", foto: "rodillo.jpg" },
    { id: 28, nombre: "Set de Muestras (5 productos)", categoria: "accesorios", precio: 1800, descripcion: "Set con 5 muestras de productos estrella.", beneficios: "Prueba sin compromiso, ideal para viajes", tipoPiel: "Todos", foto: "prueba.jpg" },
    { id: 29, nombre: "Kit Rutina Completa", categoria: "accesorios", precio: 12000, descripcion: "Kit completo con limpiador, sérum, crema, protector solar y mascarilla.", beneficios: "Todo en uno, ahorras dinero", tipoPiel: "Personalizable", foto: "kitcomple.jpg" }
];

let carrito = [];
let currentProducto = null;

// ==================== FUNCIONES PRINCIPALES ====================
function renderizarProductos(categoria = "todos") {
    const container = document.getElementById("productosContainer");
    const filtrados = categoria === "todos" ? productos : productos.filter(p => p.categoria === categoria);
    
    let html = '<div class="products-grid">';
    filtrados.forEach(p => {
        html += `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${p.foto}')" onclick="abrirModal(${p.id})"></div>
                <div class="product-info">
                    <h3 class="product-title" onclick="abrirModal(${p.id})">${p.nombre}</h3>
                    <div class="product-price" onclick="abrirModal(${p.id})">${p.precio.toLocaleString()} CUP</div>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <button class="btn-add" onclick="agregarAlCarrito(${p.id})">Agregar</button>
                        <button class="btn-cart" onclick="verCarrito()">Ver carrito</button>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

function abrirModal(id) {
    currentProducto = productos.find(p => p.id === id);
    if (!currentProducto) return;
    
    document.getElementById("modalImage").src = currentProducto.foto;
    document.getElementById("modalTitle").innerText = currentProducto.nombre;
    document.getElementById("modalCategory").innerText = currentProducto.categoria;
    document.getElementById("modalPrice").innerHTML = `${currentProducto.precio.toLocaleString()} CUP`;
    document.getElementById("modalDesc").innerText = currentProducto.descripcion;
    document.getElementById("modalBenefits").innerText = currentProducto.beneficios;
    document.getElementById("modalSkin").innerText = currentProducto.tipoPiel;
    
    document.getElementById("productModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    document.getElementById("productModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function verCarrito() {
    const sidebar = document.getElementById("cartSidebar");
    if(sidebar) {
        sidebar.classList.add("open");
    }
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const existente = carrito.find(item => item.id === id);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    
    actualizarCarrito();
    mostrarMensaje(`${producto.nombre} agregado al carrito`);
}

function mostrarMensaje(texto) {
    const toast = document.createElement('div');
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${texto}`;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(246, 132, 109, 0.95)';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '40px';
    toast.style.fontSize = '0.9rem';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '3000';
    toast.style.backdropFilter = 'blur(8px)';
    toast.style.fontFamily = "'Inter', sans-serif";
    toast.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 500);
    }, 2000);
}

function actualizarCarrito() {
    const cartCount = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById("cartCount").innerText = cartCount;
    
    const cartItemsContainer = document.getElementById("cartItems");
    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#4A3728;">Carrito vacío</p>';
        document.getElementById("cartTotal").innerText = "0 CUP";
        return;
    }
    
    let html = "";
    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        html += `
            <div class="cart-item">
                <img class="cart-item-image" src="${item.foto}" alt="${item.nombre}">
                <div class="cart-item-info">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.nombre}</div>
                        <div class="cart-item-price">${item.precio.toLocaleString()} CUP</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
                        <span>${item.cantidad}</span>
                        <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    document.getElementById("cartTotal").innerText = `${total.toLocaleString()} CUP`;
    window.carritoTotal = total;
}

function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (item) {
        item.cantidad += delta;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(i => i.id !== id);
        }
        actualizarCarrito();
    }
}

// ==================== INICIALIZAR EVENTOS CUANDO EL DOM ESTÉ LISTO ====================
document.addEventListener("DOMContentLoaded", function() {
    
    // Filtros
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderizarProductos(btn.getAttribute("data-category"));
        });
    });
    
    // Carrito: abrir
    const cartIcon = document.getElementById("cartIcon");
    if(cartIcon) {
        cartIcon.addEventListener("click", verCarrito);
    }
    
    // Carrito: cerrar
    const closeCart = document.getElementById("closeCart");
    if(closeCart) {
        closeCart.addEventListener("click", () => {
            document.getElementById("cartSidebar").classList.remove("open");
        });
    }
    
    // Checkout (enviar pedido)
    const checkoutBtn = document.getElementById("checkoutBtn");
    if(checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (carrito.length === 0) {
                alert("Tu carrito está vacío");
                return;
            }
            let mensaje = "Hola, quiero hacer un pedido:%0A%0A";
            carrito.forEach(item => {
                mensaje += `- ${item.nombre} x${item.cantidad}%0A`;
            });
            mensaje += `%0ATOTAL: ${window.carritoTotal.toLocaleString()} CUP`;
            window.open(`https://wa.me/5358536942?text=${mensaje}`, "_blank");
        });
    }
    
    // Modal: agregar al carrito
    const modalAddCart = document.getElementById("modalAddToCart");
    if(modalAddCart) {
        modalAddCart.addEventListener("click", () => {
            if (currentProducto) {
                agregarAlCarrito(currentProducto.id);
                cerrarModal();
            }
        });
    }
    
    // Modal: cerrar con la X
    const modalCloseBtn = document.querySelector(".modal-close");
    if(modalCloseBtn) {
        modalCloseBtn.addEventListener("click", cerrarModal);
    }
    
    // Modal: cerrar al hacer clic fuera
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("productModal");
        if (e.target === modal) {
            cerrarModal();
        }
    });
    
    // Menú móvil
    const mobileMenu = document.querySelector(".mobile-menu");
    if(mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            const navLinks = document.querySelector(".nav-links");
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "70px";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.backgroundColor = "rgba(255,255,255,0.9)";
                navLinks.style.backdropFilter = "blur(8px)";
                navLinks.style.padding = "20px";
                navLinks.style.gap = "16px";
                navLinks.style.zIndex = "999";
            }
        });
    }
    
    // Inicializar productos al cargar
    renderizarProductos();
});