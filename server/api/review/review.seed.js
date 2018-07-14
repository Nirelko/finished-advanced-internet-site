import categories from '../../../common/consts/categories';

const [Electronics, Technology, Programming, Cars, Home] = categories;

export default {
  seed() {
    return [{
      title: 'Chocolate Chip Cookies',
      category: Electronics,
      content: `Preheat oven to 375 degrees F (190 degrees C).
      In a large bowl, cream together the butter, peanut butter, brown sugar, and white sugar until smooth. Beat in the eggs one at a time, then stir in the corn syrup, water, and vanilla. Combine the flour, baking soda, and salt; stir into the peanut butter mixture. Fold in chocolate chunks. Drop by 1/4 cupfuls 3 inches apart onto ungreased baking sheets.
      Bake for 12 to 14 minutes in the preheated oven, or until edges are golden. Allow cookies to cool for 1 minute on the cookie sheet before removing to wire racks to cool completely.`,
      date: new Date('December 17, 2017 17:24:00'),
      author: 'asafl95'
    }, {
      title: 'Labneh (Lebanese Yogurt)',
      category: Technology,
      content: `Mix Greek yogurt, olive oil, mint, dill, and kosher salt together in a bowl.
      Cover and refrigerate up to 12 hours.`,
      date: new Date('January 22, 2018 08:45:42'),
      author: 'nirelko'
    }, {
      title: 'Macaroni and Cheese',
      category: Programming,
      content: `Preheat an oven to 350 degrees F (175 degrees C). Grease a 9x13 inch glass baking dish.
      Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Once the water is boiling, stir in the macaroni, and return to a boil. Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 8 minutes. Drain and mix with half of the butter.
      While the macaroni is boiling, melt the remaining butter in a saucepan over medium heat. Stir in the onions, and cook until the onions begin to soften, about 3 minutes. Stir in the flour, and cook 5 minutes longer. Add the milk and bring to a simmer, stirring frequently. Cook and stir until the milk has thickened, about 10 minutes. Once thick and smooth, stir in the salt, white pepper, Worcestershire sauce, hot pepper sauce, mustard, 2 cups of Cheddar cheese, and 1/4 cup of Parmesan cheese. Stir until the cheeses have melted, then stir in the macaroni until evenly coated. Scrape into the prepared baking dish, and smooth the top. Toss the remaining 1 cup Cheddar cheese and 1/4 cup Parmesan cheese with the dry bread crumbs in a mixing bowl. Sprinkle evenly over the top of the macaroni.
      Bake in the preheated oven until the macaroni is hot and the crust is golden brown, about 30 minutes.`,
      date: new Date('January 5, 2018 18:00:03'),
      author: 'Nivz'
    }, {
      title: 'Meatballs',
      category: Cars,
      content: `Combine ground pork, Italian sausage, ground sirloin, and ground chuck in a large bowl. Mix them with your hands until thoroughly combined.
      Soak bread chunks in chicken broth in a bowl until completely soft. Combine garlic and parsley in a mini chopper or food processor and grind to a fine paste. Squeeze the excess broth out of the bread, reserving the broth in a bowl, and add the bread to the meats along with the garlic and parsley paste. Gently mix in beaten eggs and grated Pecorino Romano cheese with your hands until fully incorporated into the meat mixture. If the mixture seems dry, pour in some of the reserved chicken broth.
      Pinch off golf ball-sized pieces of the meat mixture and roll them into meatballs, taking care not to pack them too tightly, and set them on a baking tray. Depending on how big you make them, you should end up with about 30 meatballs.
      Heat the olive oil and butter in a large skillet over medium-high heat. Working in two or three batches, brown the meatballs on all sides and drain on paper towels. If you're adding them to a pot of sauce, you may undercook them slightly, as they will finish cooking in the sauce.`,
      date: new Date('January 5, 2018 18:05:00'),
      author: 'Nivz'
    }, {
      title: 'Israeli Salad',
      category: Home,
      content: `Toss cucumbers, tomatoes, onion, bell pepper, garlic, parsley, and mint together in a bowl. Drizzle olive oil and lemon juice over the salad and toss to coat; season with salt and pepper.`,
      date: new Date('January 5, 2018 18:07:00'),
      author: 'asafl95'
    }, {
      title: 'Roasted Cauliflower Soup',
      category: Home,
      content: `Place the cauliflower florets into a large bowl of lightly salted water; allow to stand for 20 minutes. Drain well, and arrange on a sheet of heavy aluminum foil on a baking sheet. Spray the olive oil cooking spray evenly on the cauliflower.
      Preheat the oven's broiler and set the oven rack about 6 inches from the heat source.
      Broil the cauliflower until browned, 20 to 30 minutes.
      Meanwhile, heat olive oil in a large soup pot, and cook the onion until translucent, about 5 minutes; stir in the garlic and roasted cauliflower. Pour in the water, season with salt and black pepper, and simmer until all the vegetables are tender, about 30 minutes. Blend the soup in the pot with an immersion hand blender until creamy and smooth.`,
      date: new Date('February 14, 2018 12:03:00'),
      author: 'nirelko'
    }, {
      title: 'Chocolate Sheet Cake',
      category: Electronics,
      content: `Preheat an oven to 350 degrees F (175 degrees C). Grease an 11x17 jelly roll pan.
      Mix white sugar and flour in a large bowl. Combine 1 cup butter, water, and 3 tablespoons cocoa powder in a small saucepan; stir over medium heat until butter is melted and mixture is well combined. Pour melted butter mixture over sugar and flour; beat well. Beat in baking soda, buttermilk, eggs, and vanilla extract. Pour batter into prepared pan.
      Bake in preheated oven until a toothpick inserted into the center of cake comes out clean, 20 to 25 minutes. Remove from oven and allow to cool on a wire rack.
      Combine remaining 1/2 cup butter, 3 tablespoons cocoa powder, and milk in a small saucepan; stir over medium heat until butter is melted and mixture is well combined. Beat powdered sugar into the butter mixture, mixing until frosting is smooth. Stir pecans into frosting and pour over cooled cake.`,
      date: new Date('March 1, 2018 07:38:16'),
      author: 'asafl95'
    }];
  }
};