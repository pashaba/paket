document.addEventListener('DOMContentLoaded', () => {
    const products = [
        // Indonesia
        {
            operator: 'Indosat',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Indosat_Logo_2020.svg/1200px-Indosat_Logo_2020.svg.png',
            description: 'Paket data dengan kuota besar untuk kebutuhan sehari-hari.',
            packages: [
                { name: '1GB 30Hr', price: 8395, code: 'ID1', profit: 3000 },
                { name: '2GB 30Hr', price: 16550, code: 'ID2', profit: 3000 },
                { name: '3GB 30Hr', price: 20000, code: 'ID3', profit: 3000 },
                { name: '5GB 30Hr', price: 30995, code: 'ID5', profit: 3000 },
                { name: '7GB 30Hr', price: 45000, code: 'ID7', profit: 3000 },
                { name: '10GB 30Hr', price: 60995, code: 'ID10', profit: 3000 },
                { name: '15GB 30Hr', price: 84995, code: 'ID15', profit: 3000 },
                { name: '20GB 30Hr', price: 99995, code: 'ID20', profit: 3000 }
            ]
        },
        {
            operator: 'Telkomsel',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Telkomsel_Logo_2015.svg/1200px-Telkomsel_Logo_2015.svg.png',
            description: 'Telkomsel memberikan koneksi terbaik dengan berbagai pilihan paket data.',
            packages: [
                { name: '1GB 30Hr', price: 12000, code: 'TSEL1', profit: 3000 },
                { name: '2GB 30Hr', price: 16000, code: 'TSEL2', profit: 3000 },
                { name: '3GB 30Hr', price: 22000, code: 'TSEL3', profit: 3000 },
                { name: '5GB 30Hr', price: 30000, code: 'TSEL5', profit: 3000 },
                { name: '7GB 30Hr', price: 38000, code: 'TSEL7', profit: 3000 },
                { name: '10GB 30Hr', price: 52000, code: 'TSEL10', profit: 3000 },
                { name: '15GB 30Hr', price: 69000, code: 'TSEL15', profit: 3000 },
                { name: '20GB 30Hr', price: 83000, code: 'TSEL20', profit: 3000 }
            ]
        },
        {
            operator: 'XL',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/XL_Axiata_Logo_2015.svg/1200px-XL_Axiata_Logo_2015.svg.png',
            description: 'Paket data XL untuk kebutuhan internet cepat dengan harga bersaing.',
            packages: [
                { name: '1GB 30Hr', price: 10000, code: 'XL1', profit: 3000 },
                { name: '2GB 30Hr', price: 15000, code: 'XL2', profit: 3000 },
                { name: '3GB 30Hr', price: 22000, code: 'XL3', profit: 3000 },
                { name: '5GB 30Hr', price: 35000, code: 'XL5', profit: 3000 },
                { name: '7GB 30Hr', price: 42000, code: 'XL7', profit: 3000 },
                { name: '10GB 30Hr', price: 54000, code: 'XL10', profit: 3000 },
                { name: '15GB 30Hr', price: 70000, code: 'XL15', profit: 3000 },
                { name: '20GB 30Hr', price: 88000, code: 'XL20', profit: 3000 }
            ]
        },
        {
            operator: 'Tri (3)',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/3_Logo_2015.svg/1024px-3_Logo_2015.svg.png',
            description: 'Paket data Tri menawarkan berbagai pilihan harga untuk internet cepat.',
            packages: [
                { name: '1GB 30Hr', price: 11000, code: '3-1GB', profit: 3000 },
                { name: '2GB 30Hr', price: 14000, code: '3-2GB', profit: 3000 },
                { name: '3GB 30Hr', price: 20000, code: '3-3GB', profit: 3000 },
                { name: '5GB 30Hr', price: 28000, code: '3-5GB', profit: 3000 },
                { name: '7GB 30Hr', price: 35000, code: '3-7GB', profit: 3000 },
                { name: '10GB 30Hr', price: 46000, code: '3-10GB', profit: 3000 },
                { name: '15GB 30Hr', price: 60000, code: '3-15GB', profit: 3000 },
                { name: '20GB 30Hr', price: 76000, code: '3-20GB', profit: 3000 }
            ]
        },

        // Malaysia
        {
            operator: 'Maxis',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maxis_logo.svg/800px-Maxis_logo.svg.png',
            description: 'Maxis menawarkan paket data dengan berbagai pilihan harga dan kuota di Malaysia.',
            packages: [
                { name: '1GB 30Hr', price: 10, code: 'MY1', profit: 3000 },
                { name: '2GB 30Hr', price: 20, code: 'MY2', profit: 3000 },
                { name: '3GB 30Hr', price: 30, code: 'MY3', profit: 3000 },
                { name: '5GB 30Hr', price: 50, code: 'MY5', profit: 3000 },
                { name: '7GB 30Hr', price: 70, code: 'MY7', profit: 3000 },
                { name: '10GB 30Hr', price: 100, code: 'MY10', profit: 3000 }
            ]
        },
        {
            operator: 'Celcom',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Celcom_Logo.svg/1200px-Celcom_Logo.svg.png',
            description: 'Celcom menyediakan paket data dengan berbagai pilihan kuota untuk pengguna di Malaysia.',
            packages: [
                { name: '1GB 30Hr', price: 12, code: 'MYC1', profit: 3000 },
                { name: '2GB 30Hr', price: 24, code: 'MYC2', profit: 3000 },
                { name: '3GB 30Hr', price: 36, code: 'MYC3', profit: 3000 },
                { name: '5GB 30Hr', price: 48, code: 'MYC5', profit: 3000 },
                { name: '7GB 30Hr', price: 60, code: 'MYC7', profit: 3000 },
                { name: '10GB 30Hr', price: 90, code: 'MYC10', profit: 3000 }
            ]
        },
        {
            operator: 'U Mobile',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/U_Mobile_logo.svg/1200px-U_Mobile_logo.svg.png',
            description: 'Paket data U Mobile untuk pengguna Malaysia dengan kuota menarik dan harga terjangkau.',
            packages: [
                { name: '1GB 30Hr', price: 8, code: 'MYUM1', profit: 3000 },
                { name: '2GB 30Hr', price: 16, code: 'MYUM2', profit: 3000 },
                { name: '3GB 30Hr', price: 24, code: 'MYUM3', profit: 3000 },
                { name: '5GB 30Hr', price: 40, code: 'MYUM5', profit: 3000 },
                { name: '7GB 30Hr', price: 56, code: 'MYUM7', profit: 3000 },
                { name: '10GB 30Hr', price: 80, code: 'MYUM10', profit: 3000 }
            ]
        },
        {
            operator: 'Digi',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Digi_logo_2017.svg/800px-Digi_logo_2017.svg.png',
            description: 'Digi menawarkan paket data dengan harga terbaik di Malaysia.',
            packages: [
                { name: '1GB 30Hr', price: 9, code: 'MYD1', profit: 3000 },
                { name: '2GB 30Hr', price: 18, code: 'MYD2', profit: 3000 },
                { name: '3GB 30Hr', price: 27, code: 'MYD3', profit: 3000 },
                { name: '5GB 30Hr', price: 45, code: 'MYD5', profit: 3000 },
                { name: '7GB 30Hr', price: 63, code: 'MYD7', profit: 3000 },
                { name: '10GB 30Hr', price: 90, code: 'MYD10', profit: 3000 }
            ]
        }
    ];

    // Render paket data berdasarkan operator
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productTitle = document.createElement('h2');
        productTitle.textContent = product.operator;
        productDiv.appendChild(productTitle);

        const productLogo = document.createElement('img');
        productLogo.src = product.logo;
        productLogo.alt = product.operator + ' Logo';
        productLogo.classList.add('product-logo');
        productDiv.appendChild(productLogo);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        product.packages.forEach(pkg => {
            const packageDiv = document.createElement('div');
            packageDiv.classList.add('package');

            const button = document.createElement('button');
            button.textContent = `${pkg.name} - Rp${pkg.price}`;
            button.addEventListener('click', () => {
                window.location.href = `https://wa.me/6285715294026?text=Saya%20ingin%20memesan%20paket%20${pkg.name}%20dari%20${product.operator}.%20Kode%20Paket%3A%20${pkg.code}`;
            });

            packageDiv.appendChild(button);
            productDiv.appendChild(packageDiv);
        });

        productList.appendChild(productDiv);
    });
});