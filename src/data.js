export default {
  materials: [
    {
      name: "Wood",
      slug: "wood",
      image: "wood.jpg",
      productsWeFabricate: [
        {
          product: "woodProduct1.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct2.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct3.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct4.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct1.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct2.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct3.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
        {
          product: "woodProduct4.jpg",
          name: "Wooden Tables",
          details: "Some product details",
        },
      ],
      types: [
        {
          name: "Ply Wood",
          slug: "ply-wood",
          image: "ply.jpg",
          type: [
            {
              name: "Hardwood",
              slug: "hardwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "Softwood",
              slug: "softwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "MDF",
          slug: "mdf",
          image: "mdf.jpg",
          type: [
            {
              name: "Medite",
              slug: "medite",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "Kronospan",
              slug: "kronospan",
              sizes: [
                { thickness: 6, priceSqM: 1.0, costPerCut: 1.5 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "Finsa",
              slug: "finsa",
              sizes: [
                { thickness: 12, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 15, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 4.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Chipbord",
          slug: "chipbord",
          image: "chipbord.jpg",
          type: [
            {
              name: "Standard",
              slug: "standard",
              sizes: [
                { thickness: 12, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 15, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 4.35, costPerCut: 1 },
              ],
            },
            {
              name: "Furniture",
              slug: "furniture",
              sizes: [
                { thickness: 15, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 30, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 38, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "Flooring",
              slug: "flooring",
              sizes: [
                { thickness: 18, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 22, priceSqM: 2.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Particle Bord",
          slug: "particle-bord",
          image: "particle-bord.jpg",
          type: [
            {
              name: "Smartply",
              slug: "smartply",
              sizes: [
                { thickness: 15, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 30, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 38, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "FrBuild",
              slug: "frBuild",
              sizes: [
                { thickness: 11, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 15, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 3.35, costPerCut: 1 },
              ],
            },
            {
              name: "Propassiv",
              slug: "propassiv",
              sizes: [{ thickness: 12.5, priceSqM: 1.35, costPerCut: 1 }],
            },
          ],
        },
      ],
    },
    {
      name: "Plastic",
      slug: "plastic",
      image: "plastic.jpg",
      productsWeFabricate: [
        {
          product: "plasticProduct1.jpg",
          name: "Pastic Tables",
          details: "Some product details",
        },
        {
          product: "plasticProduct2.jpg",
          name: "Pastic Tables",
          details: "Some product details",
        },
        {
          product: "plasticProduct3.jpg",
          name: "Pastic Tables",
          details: "Some product details",
        },
        {
          product: "plasticProduct4.jpg",
          name: "Pastic Tables",
          details: "Some product details",
        },
      ],
      types: [
        {
          name: "Acrylic",
          slug: "acrylic",
          image: "acrylic.jpg",
          type: [
            {
              name: "Clear",
              slug: "clear",
              sizes: [
                { thickness: 3, priceSqM: 47, costPerCut: 1 },
                { thickness: 5, priceSqM: 78, costPerCut: 1 },
                { thickness: 8, priceSqM: 125, costPerCut: 1 },
                { thickness: 10, priceSqM: 143, costPerCut: 1 },
                { thickness: 15, priceSqM: 229, costPerCut: 1 },
                { thickness: 20, priceSqM: 315, costPerCut: 1 },
                { thickness: 30, priceSqM: 652, costPerCut: 1 },
              ],
            },
            {
              name: "Red4403",
              slug: "red4403",
              sizes: [
                { thickness: 3, priceSqM: 51, costPerCut: 1 },
                { thickness: 5, priceSqM: 105, costPerCut: 1 },
                { thickness: 10, priceSqM: 180, costPerCut: 1 },
                { thickness: 20, priceSqM: 364, costPerCut: 1 },
                { thickness: 30, priceSqM: 820, costPerCut: 1 },
              ],
            },
            {
              name: "Green692",
              slug: "green692",
              sizes: [
                { thickness: 3, priceSqM: 51, costPerCut: 1 },
                { thickness: 5, priceSqM: 105, costPerCut: 1 },
                { thickness: 10, priceSqM: 180, costPerCut: 1 },
                { thickness: 20, priceSqM: 364, costPerCut: 1 },
                { thickness: 30, priceSqM: 820, costPerCut: 1 },
              ],
            },
            {
              name: "Blue1743",
              slug: "blue1743",
              sizes: [
                { thickness: 3, priceSqM: 51, costPerCut: 1 },
                { thickness: 5, priceSqM: 105, costPerCut: 1 },
                { thickness: 10, priceSqM: 180, costPerCut: 1 },
                { thickness: 20, priceSqM: 364, costPerCut: 1 },
                { thickness: 30, priceSqM: 820, costPerCut: 1 },
              ],
            },
            {
              name: "White069",
              slug: "white069",
              sizes: [
                { thickness: 3, priceSqM: 49, costPerCut: 1 },
                { thickness: 5, priceSqM: 81, costPerCut: 1 },
                { thickness: 10, priceSqM: 164, costPerCut: 1 },
                { thickness: 20, priceSqM: 502, costPerCut: 1 },
              ],
            },
            {
              name: "Black9030",
              slug: "black9030",
              sizes: [
                { thickness: 3, priceSqM: 51, costPerCut: 1 },
                { thickness: 5, priceSqM: 105, costPerCut: 1 },
                { thickness: 10, priceSqM: 180, costPerCut: 1 },
                { thickness: 20, priceSqM: 610, costPerCut: 1 },
                { thickness: 30, priceSqM: 820, costPerCut: 1 },
              ],
            },
            {
              name: "LEDOpal",
              slug: "LEDOpal",
              sizes: [
                { thickness: 3, priceSqM: 54, costPerCut: 1 },
                { thickness: 5, priceSqM: 86, costPerCut: 1 },
                { thickness: 10, priceSqM: 177, costPerCut: 1 },
                { thickness: 15, priceSqM: 270, costPerCut: 1 },
                { thickness: 20, priceSqM: 325, costPerCut: 1 },
                { thickness: 30, priceSqM: 660, costPerCut: 1 },
              ],
            },
            {
              name: "LEDRed",
              slug: "LEDRed",
              sizes: [
                { thickness: 30, priceSqM: 820, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "PET G",
          slug: "petg",
          image: "petg.jpg",
          type: [
            {
              name: "hardwood",
              slug: "hardwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "softwood",
              slug: "softwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Polycarb",
          slug: "polycarb",
          image: "polycarb.jpg",
          type: [
            {
              name: "hardwood",
              slug: "hardwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "softwood",
              slug: "softwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "PVC Foam",
          slug: "pvc-foam",
          image: "pvc-foam.jpg",
          type: [
            {
              name: "White",
              slug: "White",
              sizes: [
                { thickness: 3, priceSqM: 50, costPerCut: 1 },
                { thickness: 10, priceSqM: 61, costPerCut: 1 },
                { thickness: 19, priceSqM: 210, costPerCut: 1 },
              ],
            },
            {
              name: "Ivory",
              slug: "Ivory",
              sizes: [
                { thickness: 3, priceSqM: 50, costPerCut: 1 },
                { thickness: 10, priceSqM: 61, costPerCut: 1 },
                { thickness: 19, priceSqM: 210, costPerCut: 1 },
              ],
            },
            {
              name: "Black",
              slug: "Black",
              sizes: [
                { thickness: 3, priceSqM: 50, costPerCut: 1 },
                { thickness: 10, priceSqM: 61, costPerCut: 1 },
                { thickness: 19, priceSqM: 210, costPerCut: 1 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Metal",
      slug: "metal",
      image: "metal.jpg",
      productsWeFabricate: [
        {
          product: "metalProduct1.jpg",
          name: "Metal Tables",
          details: "Some product details",
        },
        {
          product: "metalProduct2.jpg",
          name: "Metal Tables",
          details: "Some product details",
        },
        {
          product: "metalProduct3.jpg",
          name: "Metal Tables",
          details: "Some product details",
        },
        {
          product: "metalProduct4.jpg",
          name: "Metal Tables",
          details: "Some product details",
        },
      ],
      types: [
        {
          name: "Carbon",
          slug: "carbon",
          image: "carbon.jpg",
          type: [
            {
              name: "hardwood",
              slug: "hardwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "softwood",
              slug: "softwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Stainless",
          slug: "stainless",
          image: "stainless.jpg",
          type: [
            {
              name: "hardwood",
              slug: "hardwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "softwood",
              slug: "softwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Aluminium",
          slug: "aluminium",
          image: "aluminium.jpg",
          type: [
            {
              name: "hardwood",
              slug: "hardwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
            {
              name: "softwood",
              slug: "softwood",
              sizes: [
                { thickness: 6, priceSqM: 1.35, costPerCut: 1 },
                { thickness: 9, priceSqM: 2.35, costPerCut: 1 },
                { thickness: 12, priceSqM: 3.35, costPerCut: 1 },
                { thickness: 18, priceSqM: 4.35, costPerCut: 1 },
                { thickness: 25, priceSqM: 5.35, costPerCut: 1 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ACM",
      slug: "aluminium-composite",
      image: "aluminium-composite.jpg",
      productsWeFabricate: [
        {
          product: "acmProduct1.jpg",
          name: "Building Cladding",
          details: "Some product details",
        },
        {
          product: "acmProduct2.jpg",
          name: "Building Cladding",
          details: "Some product details",
        },
        {
          product: "acmProduct3.jpg",
          name: "Building Cladding",
          details: "Some product details",
        },
        {
          product: "acmProduct4.jpg",
          name: "Building Cladding",
          details: "Some product details",
        },
      ],
      types: [
        {
          name: "White Composite",
          slug: "white-composite",
          image: "whiteComp.jpg",
          type: [
            {
              name: "White",
              slug: "White",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Standard Colours",
          slug: "standard-colours",
          image: "standardColors.jpg",
          type: [
            {
              name: "Moss Green RAL6005",
              slug: "Moss-Green",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Traffic Yellow RAL1023",
              slug: "Traffic-Yellow",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Ultramarine Blue RAL5002",
              slug: "Ultramarine-Blue",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Traffic Red RAL3020",
              slug: "Traffic-Red",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Aluminium",
              slug: "Aluminium",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
          ],
        },
        {
          name: "Special Colours",
          slug: "special-colours",
          image: "specialColors.jpg",
          type: [
            {
              name: "Gold Mirror",
              slug: "Gold-Mirror",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Silver Mirror",
              slug: "Silver-Mirror",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Brushed Silver",
              slug: "Brushed-Silver",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Brushed Gold",
              slug: "Brushed-Gold",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Brushed Copper",
              slug: "Brushed-Copper",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Light Ivory RAL1015",
              slug: "Light-Ivory",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Night Blue RAL5022",
              slug: "Night-Blue",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Nut Brown RAL8011",
              slug: "Nut-Brown",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Purple Red RAL3004",
              slug: "Purple-Red",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Pure Orange RAL2004",
              slug: "Pure-Orange",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Jet Black RAL9005",
              slug: "Jet-Black",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "White Aluminium RAL9006",
              slug: "White-Aluminium",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
            {
              name: "Traffic Grey RAL7042",
              slug: "Traffic Grey",
              sizes: [
                { thickness: 3, priceSqM: 46, costPerCut: 1 },
              ],
            },
          ],
        },
      ],
    },
  ],
  products: [
    {name: "Cemencril 19", colorOrSize: "1.4kg", orderCode: "ZCEM19", manufacturer: "Irpen", cost: 19.50},
    {name: "Cemencril 25", colorOrSize: "1.4kg", orderCode: "ZCEM25", manufacturer: "Irpen", cost: 23.50},
    {name: "Cemencril 28", colorOrSize: "1.4kg", orderCode: "ZCEM28", manufacturer: "Irpen", cost: 23.50},
    {name: "Bonding", colorOrSize: "50ml", orderCode: "n/a", manufacturer: "CD UK", cost: 3.73},
    {name: "Translucent Adhesive", colorOrSize: "50ml", orderCode: "C50TW-AC", manufacturer: "CD UK", cost: 5.44},
    {name: "Vynal Edging Tape", colorOrSize: "Black", orderCode: "n/a", manufacturer: "ATC", cost: 0.00},
    {name: "Vynal Edging Tape", colorOrSize: "White", orderCode: "n/a", manufacturer: "ATC", cost: 0.00},
    {name: "Solder PB Free MIN-ACT 0.9mm", colorOrSize: "500g", orderCode: "SD00988", manufacturer: "CPC", cost: 29.92},
    {name: "Solder PB Free X39 0.9mm", colorOrSize: "500g", orderCode: "SD00980", manufacturer: "CPC", cost: 25.50},
    {name: "Cabel Ties", colorOrSize: "Small", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Cabel Ties", colorOrSize: "Large", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Scalple Blades", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "ATC", cost: 0.00},
    {name: "Blue Roll", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Locator Feet", colorOrSize: "small", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 0.00},
    {name: "Locator Feet", colorOrSize: "Medium", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 0.00},
    {name: "Locator Feet", colorOrSize: "Large", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 0.00},
    {name: "Boots", colorOrSize: "Black Small", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 66.00},
    {name: "Boots", colorOrSize: "White Small", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 66.00},
    {name: "Boots", colorOrSize: "Black Medium", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 75.00},
    {name: "Boots", colorOrSize: "White Medium", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 75.00},
    {name: "Boots", colorOrSize: "Black Medium", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 110.00},
    {name: "Boots", colorOrSize: "White Medium", orderCode: "n/a", manufacturer: "SNAPFIX", cost: 110.00},
    {name: "Cooling Fans", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Heat Cutout Sensor", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Grey Elec Plugs", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Heat Shrink 6.4mm", colorOrSize: "White", orderCode: "n/a", manufacturer: "Universal Suppliers", cost: 18.30},
    {name: "Heat Shrink 6.4mm", colorOrSize: "Black", orderCode: "n/a", manufacturer: "Universal Suppliers", cost: 18.30},
    {name: "Silicone Wire", colorOrSize: "Red", orderCode: "43606", manufacturer: "Batt Cables", cost: 165.00},
    {name: "Silicone Wire", colorOrSize: "Grey", orderCode: "43570", manufacturer: "Batt Cables", cost: 165.00},
    {name: "Eletical Choc Block", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Tech Screws", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "Rivet ", colorOrSize: "White 4.0mm x 14mm", orderCode: "n/a", manufacturer: "Shop4fasteners", cost: 11.21},
    {name: "Rivet ", colorOrSize: "Black 4.0mm x 14mm", orderCode: "n/a", manufacturer: "Shop4fasteners", cost: 11.21},
    {name: "Rivet ", colorOrSize: "Silver 4.0mm x 14mm", orderCode: "n/a", manufacturer: "Shop4fasteners", cost: 7.09},
    {name: "Rivet ", colorOrSize: "Silver 3.2mm x 10mm", orderCode: "n/a", manufacturer: "Shop4fasteners", cost: 0.00},
    {name: "Neon Stands", colorOrSize: "n/a", orderCode: "n/a", manufacturer: "n/a", cost: 0.00},
    {name: "2 Way Dimmer Switch", colorOrSize: "1 to 10 volt", orderCode: "n/a", manufacturer: "Direct Trade", cost: 5.81},
  ],
};
