import categories from '../../../common/consts/categories';

const [Electronics, Technology, Programming, Cars, Home] = categories;

export default {
  seed() {
    return [{
      title: 'Seat Ibiza',
      category: Cars,
      content: `The Ibiza is Seat’s longest-running nameplate and the car it’s best-known for. It goes toe-to-toe with the Renault Clio, Peugeot 208, Ford Fiesta, Citroen C3, Vauxhall Corsa, Nissan Micra and the rest of the mainstream supermini crowd. This is a part of the market that had a quiet period, but is now coming to life with the new C3, Micra and Fiesta.

Even if you don’t want an Ibiza, pay attention: this car is the first showing of a new VW platform called MQB A0. That’s a smaller, lighter variant of what’s under all the recent VW Group transverse-engined cars. So the Ibiza’s platform will also carry a new small crossover from Seat called the Arona (launching late in 2017), plus very soon the next VW Polo, Audi A1 and Skoda Fabia, and also petite crossovers from VW and Audi.`,
      date: new Date('December 17, 2017 17:24:00'),
      author: 'asafl95'
    }, {
      title: 'TypeScript',
      category: Programming,
      content: `TypeScript is defined as a superset of JavaScript, which means it behaves identical to JavaScript but with extra stuff added on. The language hasn’t been around too long but it’s already quite popular in the dev community.

It grants JS developers access to powerful tools & techniques for writing modern JavaScript, coupled with the option to output ES5 or ES6 code. The Angular team even supports TypeScript as a major part of their framework update.`,
      date: new Date('January 22, 2018 08:45:42'),
      author: 'nirelko'
    }, {
      title: 'Kotlin',
      category: Programming,
      content: `Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure. Its primary development is from a team of JetBrains programmers based in Saint Petersburg, Russia.[2] While the syntax is not compatible with Java, the JVM implementation of Kotlin's standard library is designed to interoperate with Java code and is reliant on Java code from the existing Java Class Library, such as the collections framework[3]. Kotlin uses aggressive type inference to determine the type of values and expressions for which type has been left unstated. This reduces language verbosity relative to Java, which demands often entirely redundant type specifications prior to version 10.`,
      date: new Date('January 5, 2018 18:00:03'),
      author: 'Nivz'
    }, {
      title: 'Samsung Q9FN QLED TV',
      category: Electronics,
      content: `Samsung’s much-hyped QLED technology suddenly makes sense with the 65-inch 65Q9FN. By combining QLED’s unprecedented brightness and color talents with direct instead of edge backlighting, Samsung has hit on a winning, forward-thinking formula that delivers the best 4K high dynamic range pictures we’ve seen to date.`,
      date: new Date('January 5, 2018 18:05:00'),
      author: 'Nivz'
    }, {
      title: 'VW Golf GTI',
      category: Cars,
      content: `Give it up for the GTI: This iconic hot hatch balances fun and function as few can do, and continues to win a spot on our 10Best Cars list for 2018. The standard powertrain is a 220-hp turbo 2.0-liter inline-four with a six-speed manual. A six-speed automatic costs extra, but it’s almost as much fun as the manual. Sportier trims have upgraded brakes and a torque-sensing limited-slip differential. The GTI’s classic plaid seats come standard, as do agile handling and hatchback practicality.`,
      date: new Date('January 5, 2018 18:07:00'),
      author: 'asafl95'
    }, {
      title: 'Summer Sheets',
      category: Home,
      content: `The sheets that you like most of the year may feel too warm in the summer heat, so just as you keep flannel sheets on hand for cold winter nights, keep lighter sheets ready for summer. After testing dozens and dozens of sets in our ongoing quest for the best sheets, we’ve found that a set in linen or percale cotton (which is more breathable than sateen) is a great way to round out your bedding collection and extend the life of your everyday sheets by giving them the summer off. I’ve highlighted six sets as well as two duvet covers that we love for a summer bed. And if you’re looking for tips on how to dress your bed for summer, see our post on how to mix and match your sheets.`,
      date: new Date('February 14, 2018 12:03:00'),
      author: 'nirelko'
    }];
  }
};