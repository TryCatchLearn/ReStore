using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data;

public static class DbInitializer
{
    public static async Task Initialize(StoreContext context, UserManager<User> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new User
            {
                UserName = "bob",
                Email = "bob@test.com"
            };

            await userManager.CreateAsync(user, "Pa$$w0rd");
            await userManager.AddToRoleAsync(user, "Member");

            var admin = new User
            {
                UserName = "admin",
                Email = "admin@test.com"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Member" });
        }

        if (context.Products.Any()) return;

        var products = new List<Product>
            {
                new Product
                {
                    Name = "iPhone 13 Pro Max Apline Green 128 GB",
                    Description =
                        "Telefonul este perfect functional, fara niciun defect .Prezinta urme de uzura, a fost tinut fara husa si folie.A avut inlocuite camere si display-ul cu componente originale de pe alt telefon iPhone !",
                    Price = 2450,
                    PictureUrl = "/images/products/poza2.png",
                    Brand = "Iphone",
                    Type = "13 Pro Max",
                    QuantityInStock = 10
                },
                new Product
                {
                    Name = "iPhone 13 Pro Purple 256 GB",
                    Description = "Telefonul este perfect functional, fara niciun defect .",
                    Price = 3000,
                    PictureUrl = "/images/products/poza1.png",
                    Brand = "Iphone",
                    Type = "13 Pro",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Iphone 14 Plus 256 GB",
                    Description =
                        "Telefonul este nou, functional",
                    Price = 5400,
                    PictureUrl = "/images/products/poza3.png",
                    Brand = "Iphone",
                    Type = "14 Plus",
                    QuantityInStock = 2
                },
                new Product
                {
                    Name = "Galaxy A55 5G 128 GB",
                    Description =
                        "Unul dintre cele mai bune telefoane de pe piata. Telefonul este sigilat si nu are nicio problema",
                    Price = 4500,
                    PictureUrl = "/images/products/poza4.png",
                    Brand = "Samsung",
                    Type = "Galaxy",
                    QuantityInStock = 2
                },
                new Product
                {
                    Name = "Iphone 12 Pro Max 128 GB",
                    Description =
                        "Telefonul este intr-o stare buna, bateria 90%",
                    Price = 1800,
                    PictureUrl = "/images/products/iphone12.png",
                    Brand = "Iphone",
                    Type = "12 Pro Max",
                    QuantityInStock = 15                },
                new Product
                {
                    Name = "iPhone 13 Pro Max Apline Green 128 GB",
                    Description =
                        "Telefonul este perfect functional, fara niciun defect.Prezinta urme de uzura, a fost tinut fara husa si folie.A avut inlocuite camere si display-ul cu componente originale de pe alt telefon iPhone !",
                    Price = 24500,
                    PictureUrl = "/images/products/poza2.png",
                    Brand = "Iphone",
                    Type = "13 Pro Max",
                    QuantityInStock = 10
                },

                new Product
                 {
                    Name = "iPhone 11 Pro Max Apline Black 256 GB",
                    Description =
                        "Telefonul este perfect functional, fara niciun defect .A avut inlocuite camere si display-ul cu componente originale de pe alt telefon iPhone !",
                    Price = 1800,
                    PictureUrl = "/images/products/iphone11.png",
                    Brand = "Iphone",
                    Type = "11 Pro Max",
                    QuantityInStock = 10
                },

                new Product
                 {
                    Name = "iPhone 12 Pro Max Apline White 128 GB",
                    Description =
                        "Telefonul este perfect functional, fara niciun defect .",
                    Price = 2000,
                    PictureUrl = "/images/products/iphone12.png",
                    Brand = "Iphone",
                    Type = "12 Pro Max",
                    QuantityInStock = 10
                },

                new Product
                 {
                    Name = "Galaxy Z Flip5",
                    Description =
                        "Telefonul este perfect functional, fara niciun defect .",
	                    Price = 5000,
                    PictureUrl = "/images/products/poza5.png",
                    Brand = "Samsung",
                    Type = "Galaxy",
                    QuantityInStock = 12
                },

                new Product
                 {
                    Name = "iPhone 15 Pro Max Apline White 512 GB",
                    Description =
                        "Telefonul este perfect functional, bateria 100%, sigilat."
		,
                    Price = 5500,
                    PictureUrl = "/images/products/iphone15.png",
                    Brand = "Iphone",
                    Type = "15 Pro Max",
                    QuantityInStock = 1
                },

                new Product
                 {
                    Name = "Xiaomi 14 64 GB",
                    Description =
                        "Telefonul este perfect functional, bateria 97%",
                    Price = 1700,
                    PictureUrl = "/images/products/xiaomi.png",
                    Brand = "Xiaomi",
                    Type = "13 Pro Max",
                    QuantityInStock = 10
                },

            };

        foreach (var product in products)
        {
            context.Products.Add(product);
        }

        context.SaveChanges();
    }
}
