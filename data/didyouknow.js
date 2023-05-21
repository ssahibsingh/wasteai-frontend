const didYouKnow = [
    {
        id: 1,
        category: "metal",
        fact: "Upcycling allows us to transform metal waste into new and useful products. For instance, old metal cans can be repurposed into unique hanging planters, adding a touch of greenery to any space.",
    },
    {
        id: 2,
        category: "metal",
        fact: "Art and crafts offer a creative outlet for metal waste. By using discarded metal pieces, such as gears and cutlery, one can create stunning wall art that showcases the beauty of repurposed materials."
    },
    {
        id: 3,
        category: "metal",
        fact: "Metal waste can be transformed into stunning musical instruments. From creating a unique guitar out of reclaimed steel to crafting percussion instruments from discarded metal objects, talented artisans can turn scrap metal into beautiful music.",
    },
    {
        id: 4,
        category: "metal",
        fact: "Discarded metal cutlery and utensils can be repurposed into artistic home decor. By bending and shaping spoons, forks, and knives, creative individuals can fashion unique wall hooks, candle holders, or even intricate sculptures."
    },
    {
        id: 5,
        category: "metal",
        fact: "Recycled metal can be used to construct sustainable furniture. Reclaimed metal beams, pipes, and sheets can be repurposed to create stylish and durable chairs, tables, and shelves, showcasing the beauty and versatility of recycled materials.",
    },
    {
        id: 6,
        category: "metal",
        fact: "Metal art installations bring new life to discarded materials. By repurposing car parts and other scrap metal, artists can create captivating sculptures that convey movement and energy, transforming waste into visually stunning artworks."
    },
    {
        id: 7,
        category: "metal",
        fact: "Community initiatives play a vital role in metal waste management. Organizing recycling drives encourages residents to bring in old appliances and metal items, ensuring proper disposal and recycling of metal waste.",
    },
    {
        id: 8,
        category: "metal",
        fact: "Metal-based jewelry and accessories offer a unique way to repurpose metal waste. By using discarded keys, nuts, and bolts, artisans can create one-of-a-kind necklaces and earrings, showcasing creativity while promoting sustainability."
    },
    {
        id: 9,
        category: "metal",
        fact: "3D printing with metal waste opens up new possibilities. By processing metal scraps into a fine powder and utilizing a metal 3D printer, we can create customized jewelry and decorative pieces, combining technology with eco-consciousness.",
    },
    {
        id: 10,
        category: "plastic",
        fact: "Reusing plastic bottles in eco-friendly gardening can create self-watering planters. By cutting the bottom off a plastic bottle and inserting it into the soil, it acts as a reservoir, providing a continuous water supply to the plants."
    },
    {
        id: 11,
        category: "plastic",
        fact: "Plastic bottle innovation extends to building insulation. Filling plastic bottles with non-biodegradable waste like plastic wrappers and foams, then using them as insulation material, can help reduce energy consumption and promote sustainable construction practices.",
    },
    {
        id: 12,
        category: "plastic",
        fact: "Some recycling programs can transform plastic waste into eco-friendly building bricks. By combining shredded plastic with other materials, sturdy and lightweight bricks can be produced, providing an innovative solution for affordable housing and reducing plastic pollution."
    },
    {
        id: 13,
        category: "plastic",
        fact: "Certain recycling technologies can turn plastic waste into 3D printing filament. By processing and extruding plastic waste, it can be transformed into a versatile material for 3D printers, enabling the creation of new objects while reducing plastic waste.",
    },
    {
        id: 14,
        category: "plastic",
        fact: "Advanced plastic-to-fuel technologies can convert non-recyclable plastic waste into clean-burning diesel or gasoline. These processes break down plastic molecules into fuel, providing an innovative and sustainable alternative to traditional fossil fuels."
    },
    {
        id: 15,
        category: "plastic",
        fact: "Innovative companies are developing edible cutlery made from biodegradable plastics. These utensils, made from materials like cornstarch or potato starch, can be used for eating and then safely decompose, minimizing plastic waste.",
    },
    {
        id: 16,
        category: "plastic",
        fact: "Scientists are exploring the use of plastic-consuming bacteria to break down certain types of plastic waste. These bacteria can consume and digest plastic, potentially offering a natural and environmentally friendly solution for plastic disposal.",
    },
    {
        id: 17,
        category: "plastic",
        fact: "Ocean cleanup organizations are utilizing floating barriers and vessels to collect and repurpose plastic waste from our oceans. Once retrieved, the collected plastic is processed and transformed into products like sunglasses or shoes, turning ocean pollution into fashion-forward accessories."
    },
    {
        id: 18,
        category: "plastic",
        fact: "Some landfills employ innovative techniques, such as capturing methane gas from decomposing plastic waste, which can be used as a renewable energy source. This process helps reduce greenhouse gas emissions while generating electricity or heat.",
    },
    {
        id: 19,
        category: "paper",
        fact: "Old newspapers and magazines can be repurposed into eco-friendly gift wrap. By creatively folding and decorating them, you can give your gifts a unique and sustainable touch while reducing the need for single-use wrapping paper.",
    },
    {
        id: 20,
        category: "paper",
        fact: "Used paper can be transformed into handmade paper beads. By rolling strips of recycled paper into beads and varnishing them, you can create beautiful and eco-friendly jewelry pieces that are both unique and sustainable.",
    },
    {
        id: 21,
        category: "paper",
        fact: "Recycling one ton of paper saves approximately 17 trees, 7,000 gallons of water, and 380 gallons of oil. By recycling paper waste, we can conserve valuable resources, reduce deforestation, and minimize the environmental impact of paper production.",
    },
    {
        id: 22,
        category: "paper",
        fact: "Recycled paper can be transformed into innovative and sustainable packaging materials. By converting paper waste into molded pulp packaging, we can replace traditional plastic packaging with eco-friendly alternatives, protecting both products and the environment.",
    },
    {
        id: 23,
        category: "paper",
        fact: "Paper waste can be processed and transformed into cellulose insulation. By shredding and treating recycled paper, it can be turned into a safe and effective insulating material for homes, reducing energy consumption and promoting sustainable construction practices.",
    },
    {
        id: 24,
        category: "paper",
        fact: "Innovative techniques allow the conversion of paper waste into biofuels. Through processes like pyrolysis or fermentation, paper waste can be transformed into renewable energy sources such as bioethanol or biogas, reducing dependence on fossil fuels.",
    },
    {
        id: 25,
        category: "paper",
        fact: "Paper waste can be composted to enrich soil and support plant growth. By shredding paper waste and adding it to compost piles, it provides a carbon-rich material that enhances the fertility and structure of the soil.",
    },
    {
        id: 26,
        category: "paper",
        fact: "Paper waste can be responsibly disposed of by donating it to local schools or community centers. They can utilize the paper for art projects, craft activities, or educational purposes, extending the lifespan of paper while fostering creativity and learning.",
    },
    {
        id: 27,
        category: "paper",
        fact: "Some landfills capture methane gas produced by decomposing paper waste and convert it into renewable energy. By utilizing this captured methane gas, it can be converted into electricity or heat, contributing to a more sustainable waste management process.",
    },
    {
        id: 28,
        category: "cardboard",
        fact: "Cardboard boxes can be transformed into eco-friendly storage solutions. By creatively cutting, folding, and decorating them, you can create modular organizers for your home or office, giving cardboard boxes a new purpose and reducing the need for additional storage materials.",
    },
    {
        id: 29,
        category: "cardboard",
        fact: "Used cardboard tubes from paper towels or toilet paper can be repurposed as seedling planters. By filling them with soil and planting seeds, you can create biodegradable pots that can be directly planted into the ground, minimizing waste and promoting plant growth.",
    },
    {
        id: 30,
        category: "cardboard",
        fact: "Recycling cardboard saves trees and energy. By recycling one ton of cardboard, we can save approximately 17 trees, 7,000 gallons of water, and 380 gallons of oil, making cardboard recycling a crucial step in conserving natural resources.",
    },
    {
        id: 31,
        category: "cardboard",
        fact: "Cardboard can be recycled into new cardboard or paper products. Through the recycling process, used cardboard is pulped, cleaned, and transformed into a pulp that is then used to create new cardboard boxes, packaging materials, or even paper products.",
    },
    {
        id: 32,
        category: "cardboard",
        fact: "Cardboard waste can be processed and transformed into eco-friendly building materials. By compressing and treating recycled cardboard, it can be turned into structural panels, insulation boards, or even acoustic panels, providing sustainable alternatives to traditional construction materials.",
    },
    {
        id: 33,
        category: "cardboard",
        fact: "Innovative technologies allow the conversion of cardboard waste into bio-based plastics. Through processes like enzymatic conversion or chemical treatment, cardboard fibers can be transformed into biodegradable plastics, offering eco-friendly alternatives to conventional plastic materials.",
    },
    {
        id: 34,
        category: "cardboard",
        fact: "Cardboard waste can be responsibly disposed of through backyard composting. By shredding or tearing cardboard into smaller pieces and adding it to compost piles, it provides carbon-rich material that enhances the composting process and enriches the soil.",
    },
    {
        id: 35,
        category: "cardboard",
        fact: "Some landfills capture methane gas generated by decomposing cardboard waste and convert it into renewable energy. By utilizing this captured methane gas, it can be converted into electricity or heat, contributing to sustainable waste management practices.",
    },
    {
        id: 36,
        category: "cardboard",
        fact: "Cardboard waste can be used as an effective mulching material in gardening. By layering shredded or flattened cardboard around plants, it helps suppress weed growth, retain moisture in the soil, and promote healthier plant growth, while naturally decomposing over time.",
    },
    {
        id: 37,
        category: "glass",
        fact: "Empty glass jars can be upcycled into stylish and eco-friendly candle holders. By cleaning and decorating them, you can create beautiful candle holders that add a touch of ambiance to your space while reducing the need for new decorative items.",
    },
    {
        id: 38,
        category: "glass",
        fact: "Used glass bottles can be transformed into trendy and sustainable drinking glasses. By cutting and smoothing the edges of glass bottles, you can create unique and personalized glassware for beverages, giving them a second life and reducing the demand for new glasses.",
    },
    {
        id: 39,
        category: "glass",
        fact: "Recycling glass saves energy and reduces carbon emissions. By recycling one glass bottle, we can save enough energy to power a 100-watt light bulb for four hours, and recycling glass helps reduce carbon dioxide emissions associated with glass production.",
    },
    {
        id: 40,
        category: "glass",
        fact: "Recycled glass can be turned into stunning countertops and tiles. By crushing and melting recycled glass, it can be transformed into durable and visually appealing materials for kitchen and bathroom surfaces, adding a touch of sustainability to interior design.",
    },
    {
        id: 41,
        category: "glass",
        fact: "Glass waste can be processed and transformed into fiberglass insulation. By shredding and melting recycled glass, it can be converted into fine fibers used for insulation, promoting energy efficiency and reducing the environmental impact of heating and cooling buildings.",
    },
    {
        id: 42,
        category: "glass",
        fact: "Innovative glass processing techniques can transform glass waste into eco-friendly foam glass. By heating and foaming recycled glass particles, a lightweight and insulating material can be created, suitable for applications like drainage, filtration, and horticulture.",
    },
    {
        id: 43,
        category: "glass",
        fact: "Glass waste can be safely disposed of in landfills without causing environmental harm. Unlike other materials, glass is inert and does not leach harmful chemicals into the soil or water, making it a suitable material for landfill disposal.",
    },
    {
        id: 44,
        category: "glass",
        fact: "Some landfills capture methane gas generated from decomposing glass waste and convert it into renewable energy. By harnessing this captured methane gas, it can be used for electricity generation or as a clean fuel source, contributing to sustainable waste management practices.",
    },
    {
        id: 45,
        category: "glass",
        fact: "Crushed glass, also known as cullet, can be used as a construction aggregate in road paving and concrete production. By using crushed glass as a substitute for traditional aggregate materials, we can reduce the demand for natural resources and minimize the environmental impact of construction projects.",
    },
    {
        id: 46,
        category: "other",
        fact: "Old wine corks can be repurposed as unique and eco-friendly stampers. By carving shapes or designs into the cork, you can create custom stamps for arts and crafts projects, adding a touch of sustainability to your creative endeavors.",
    },
    {
        id: 47,
        category: "other",
        fact: "Broken or outdated electronics can be upcycled into eye-catching and functional art pieces. By disassembling electronic components and incorporating them into sculptures or wall art, you can transform e-waste into visually appealing conversation starters.",
    },
    {
        id: 48,
        category: "other",
        fact: "Recycling one aluminum can save enough energy to power a television for up to three hours. Aluminum recycling is highly energy-efficient, making it an effective way to conserve resources and reduce the environmental impact of manufacturing new aluminum products.",
    },
    {
        id: 49,
        category: "other",
        fact: "Some companies are recycling ocean plastics to create innovative and sustainable fashion products. By collecting and processing plastic waste from the ocean, they can transform it into fabrics, yarns, and other materials used in the production of eco-friendly clothing and accessories.",
    },
    {
        id: 50,
        category: "other",
        fact: "Biomass waste, such as agricultural residues or food waste, can be processed into renewable biofuels through advanced technologies like anaerobic digestion or pyrolysis. These processes convert organic waste into biogas or bio-oil, providing sustainable alternatives to fossil fuels.",
    },
    {
        id: 51,
        category: "other",
        fact: "Coffee grounds can be processed and used as a natural fertilizer for plants. The high nitrogen content in coffee grounds enriches the soil, improves drainage, and provides nutrients to support healthy plant growth, making it a valuable resource for gardening enthusiasts.",
    },
    {
        id: 52,
        category: "other",
        fact: "Some wastewater treatment plants utilize anaerobic digestion to convert organic waste into biogas, which can be used to generate electricity and heat. This process helps reduce the volume of waste while harnessing renewable energy from the decomposition of organic matter.",
    },
    {
        id: 53,
        category: "other",
        fact: "Certain landfills employ methane capture systems to collect and convert methane gas from decomposing organic waste into clean energy. This captured methane can power homes, businesses, or even fuel vehicles, contributing to a sustainable and circular waste management approach.",
    },
    {
        id: 54,
        category: "other",
        fact: "Non-recyclable plastic waste can be processed and converted into eco-friendly building materials, such as bricks or tiles. By incorporating plastic waste into construction materials, we can reduce the environmental impact of plastic disposal while creating durable and sustainable alternatives.",
    }
]


export default didYouKnow;