const PRODUCTS = [
    {
        slug: "mango-cheesecake-bliss",
        name: "Mango Cheesecake Bliss",
        notes: "Vanilla · Creamy · Gourmand",
        price: 299,
        burn: "Not specified",
        size: "5cm × 6cm",
        seed: "mango-cheesecake-bliss-candle",
        description:
            "A deliciously playful candle inspired by a slice of mango cheesecake, beautifully presented inside a glass. Its creamy dessert-inspired design and soft vanilla fragrance create a warm, comforting atmosphere that feels sweet, cozy, and indulgent. Mango Cheesecake Bliss is made for moments when you want your space to feel inviting, relaxed, and a little more delightful.",

        notesFull: {
            top: "Soft Vanilla",
            mid: "Creamy Dessert Accord",
            base: "Warm Vanilla",
        },
        images: [
            "./images/Mango-cheesecake-bliss-Candle/1.jpeg",
            "./images/Mango-cheesecake-bliss-Candle/2.jpeg",
            "./images/Mango-cheesecake-bliss-Candle/3.jpeg",
            "./images/Mango-cheesecake-bliss-Candle/4.jpeg",
        ],
    },
    {
        slug: "laddu-candle",
        name: "Laddu Candle",
        notes: "Kesar · Sweet · Warm",
        price: 249,
        burn: "Not specified",
        size: "Not specified",
        seed: "laddu-candle",
        description:
            "A charming candle inspired by the beloved Indian laddu, bringing a festive touch to your space with its warm, handcrafted character. Infused with a delicate kesar fragrance, Laddu Candle creates a cozy and inviting atmosphere with a subtle Indian sweetness. A playful choice for festive décor, gifting, or adding a traditional touch to everyday spaces.",

        notesFull: {
            top: "Warm Saffron",
            mid: "Delicate Kesar Accord",
            base: "Soft Creamy Warmth",
        },
        images: [
            "./images/Laddu-Candle/1.jpeg",
            "./images/Laddu-Candle/2.jpeg",
            "./images/Laddu-Candle/3.jpeg",
            "./images/Laddu-Candle/4.jpeg",
        ],
    },
    {
        slug: "golden-bloom-candle",
        name: "Golden Bloom Candle",
        notes: "Lavender · Floral · Soothing",
        price: 199,
        burn: "Not specified",
        size: "Set of 4",
        seed: "golden-bloom-candle",
        description:
            "A charming set of four Golden Bloom candles designed to bring a soft floral elegance to your space. Infused with a soothing lavender fragrance, these delicate blooms create a calming and inviting atmosphere while adding a graceful decorative touch. Perfect for festive styling, intimate evenings, gifting, or creating a serene corner at home.",

        notesFull: {
            top: "Fresh Lavender",
            mid: "Soft Floral Accord",
            base: "Gentle Powdery Warmth",
        },
        images: [
            "./images/Golden-bloom-Candle/1.jpeg",
            "./images/Golden-bloom-Candle/2.jpeg",
            "./images/Golden-bloom-Candle/3.jpeg",
            "./images/Golden-bloom-Candle/4.jpeg",
        ],
    },
    {
        slug: "pearl-luxe-candle",
        name: "Pearl Luxe Candle",
        notes: "Lavender · Floral · Elegant",
        price: 249,
        burn: "Not specified",
        size: "3.5 inch",
        seed: "pearl-luxe-candle",
        description:
            "An elegant candle with a refined pearl-inspired aesthetic, designed to bring a touch of understated luxury to any space. Infused with a soothing lavender fragrance, Pearl Luxe creates a calm and graceful atmosphere while doubling as a beautiful decorative accent. Perfect for serene evenings, thoughtful gifting, and sophisticated home décor.",

        notesFull: {
            top: "Fresh Lavender",
            mid: "Soft Floral Accord",
            base: "Gentle Powdery Warmth",
        },
        images: [
            "./images/Pearl-Luxe-Candle/1.jpeg",
            "./images/Pearl-Luxe-Candle/2.jpeg",
            "./images/Pearl-Luxe-Candle/3.jpeg",
            "./images/Pearl-Luxe-Candle/4.jpeg",
        ],
    },
    {
        slug: "peony-flower-candle",
        name: "Peony Flower Candle",
        notes: "Rose · Floral · Romantic",
        price: 199,
        burn: "Not specified",
        size: "Not specified",
        seed: "peony-flower-candle",
        description:
            "A beautifully crafted peony-inspired candle that brings the delicate charm of blooming flowers into your space. Infused with a soft rose fragrance, Peony Flower Candle creates a romantic and soothing atmosphere while adding an elegant floral touch to your décor. Perfect for cozy evenings, thoughtful gifting, celebrations, or simply making everyday moments feel a little more special.",

        notesFull: {
            top: "Fresh Rose Petals",
            mid: "Blooming Floral Accord",
            base: "Soft Powdery Floral",
        },
        images: [
            "./images/Peony-flower-candle/1.jpeg",
            "./images/Peony-flower-candle/2.jpeg",
            "./images/Peony-flower-candle/3.jpeg",
        ],
    },
    {
        slug: "pillar-candle",
        name: "Pillar Candle",
        notes: "Scented · Warm · Elegant",
        price: 229,
        burn: "Not specified",
        size: "Set of 3",
        seed: "pillar-candle",
        description:
            "A beautiful set of three scented pillar candles designed to add warmth, character, and a refined decorative touch to your space. Their timeless pillar form makes them versatile for festive décor, intimate evenings, celebrations, or everyday styling. A simple yet elegant choice for creating a warm and inviting atmosphere.",

        notesFull: {
            top: "Fresh Scented Accord",
            mid: "Soft Aromatic Notes",
            base: "Warm Gentle Finish",
        },
        images: [
            "./images/Pillar-Candle/1.jpeg",
            "./images/Pillar-Candle/2.jpeg",
            "./images/Pillar-Candle/3.jpeg",
            "./images/Pillar-Candle/4.jpeg",
        ],
    },
    {
        slug: "love-letter-message-candle",
        name: "Love Letter Message Candle",
        notes: "Scented · Romantic · Elegant",
        price: 299,
        burn: "Not specified",
        size: "Height & Width not specified",
        seed: "love-letter-message-candle",
        description:
            "A beautifully crafted love letter message candle designed to add a romantic and heartfelt touch to your space. Its charming message-inspired design makes it a thoughtful choice for gifting, anniversaries, special occasions, or simply expressing love. A delicate scented candle that brings together warmth, elegance, and sentiment in one beautiful piece.",

        notesFull: {
            top: "Fresh Scented Accord",
            mid: "Soft Romantic Notes",
            base: "Warm Gentle Finish",
        },
        images: [
            "./images/Love-letter-message-candle/1.jpeg",
            "./images/Love-letter-message-candle/2.jpeg",
            "./images/Love-letter-message-candle/3.jpeg",
            "./images/Love-letter-message-candle/4.jpeg",
            "./images/Love-letter-message-candle/5.jpeg",
        ],
    },
    {
        slug: "daisy-luxe-candle",
        name: "Daisy Luxe Candle",
        notes: "Scented · Floral · Elegant",
        price: 299,
        burn: "Not specified",
        size: "Not specified",
        seed: "daisy-luxe-candle",
        description:
            "A beautifully crafted daisy-inspired scented candle designed to bring a delicate floral charm and elegant touch to your space. Its graceful flower design makes it perfect for gifting, festive décor, special occasions, or adding a soft and inviting accent to your home.",

        notesFull: {
            top: "Fresh Floral Accord",
            mid: "Soft Daisy Bloom",
            base: "Warm Gentle Finish",
        },
        images: [
            "./images/Daisy-Luxe-Candle/1.jpeg",
            "./images/Daisy-Luxe-Candle/2.jpeg",
            "./images/Daisy-Luxe-Candle/3.jpeg",
            "./images/Daisy-Luxe-Candle/4.jpeg",
        ],
    },
    {
        slug: "floral-daisy-flower-urli",
        name: "Floral Daisy Flower Urli Candle",
        notes: "Jasmine · Floral · Elegant",
        price: 279,
        burn: "Not specified",
        size: "5.5 inch",
        seed: "floral-daisy-flower-urli",
        description:
            "A beautifully crafted floral daisy flower urli candle made with pure soy wax and infused with a soothing jasmine fragrance. Its delicate floral design adds an elegant and charming touch to any space, making it perfect for festive décor, gifting, celebrations, or creating a warm and inviting atmosphere.",

        notesFull: {
            top: "Fresh Jasmine Accord",
            mid: "Delicate Floral Bloom",
            base: "Soft Warm Finish",
        },
        images: [
            "./images/Floral-daisy-flower urli/1.jpeg",
            "./images/Floral-daisy-flower urli/2.jpeg",
            "./images/Floral-daisy-flower urli/3.jpeg",
            "./images/Floral-daisy-flower urli/4.jpeg",
        ],
    },
    {
        slug: "floral-daisy-flower-urli-candle",
        name: "Floral Daisy Flower Urli Candle",
        notes: "Scented · Floral · Elegant",
        price: 279,
        burn: "Not specified",
        size: "5.5 inch",
        seed: "floral-daisy-flower-urli-candle",
        description:
            "A beautifully crafted floral daisy flower urli candle made with pure soy wax. Its delicate floral design adds a graceful and elegant touch to any space, while its soothing scented fragrance creates a warm and inviting atmosphere. Perfect for festive décor, gifting, celebrations, or adding a charming decorative accent to your home.",

        notesFull: {
            top: "Fresh Floral Accord",
            mid: "Soft Scented Bloom",
            base: "Warm Gentle Finish",
        },
        images: [
            "./images/Floral-daisy-flower-urli-candle/1.jpeg",
            "./images/Floral-daisy-flower-urli-candle/2.jpeg",
            "./images/Floral-daisy-flower-urli-candle/3.jpeg",
            "./images/Floral-daisy-flower-urli-candle/4.jpeg",
        ],
    },
    {
        slug: "candle-bouquet",
        name: "Candle Bouquet",
        notes: "Rose · Floral · Elegant",
        price: 299,
        burn: "Not specified",
        size: "Height 26cm · Width 6cm",
        seed: "candle-bouquet",
        description:
            "A beautifully crafted candle bouquet made with premium soy wax and infused with a delicate rose fragrance. Designed to resemble a charming floral bouquet, it brings together elegance, warmth, and a romantic touch, making it a perfect choice for gifting, special occasions, celebrations, or adding a beautiful decorative accent to your space.",

        notesFull: {
            top: "Fresh Rose Accord",
            mid: "Delicate Floral Bloom",
            base: "Soft Warm Finish",
        },
        images: [
            "./images/Candle-bouquet/1.jpeg",
            "./images/Candle-bouquet/2.jpeg",
            "./images/Candle-bouquet/3.jpeg",
            "./images/Candle-bouquet/4.jpeg",
        ],
    },
    {
        slug: "daisy-flower-candle",
        name: "Daisy Flower Candle",
        notes: "Rose · Floral · Elegant",
        price: 209,
        burn: "Not specified",
        size: "Set of 6",
        seed: "daisy-flower-candle",
        description:
            "A charming set of six daisy flower candles crafted with pure soy wax and infused with a delicate rose fragrance. Their beautiful floral design adds a soft, elegant touch to any space, making them perfect for gifting, festive décor, celebrations, or creating a warm and romantic atmosphere.",

        notesFull: {
            top: "Fresh Rose Accord",
            mid: "Delicate Floral Bloom",
            base: "Soft Warm Finish",
        },
        images: [
            "./images/Daisy-flower-candle/1.jpeg",
            "./images/Daisy-flower-candle/2.jpeg",
            "./images/Daisy-flower-candle/3.jpeg",
            "./images/Daisy-flower-candle/4.jpeg",
        ],
    },
];
