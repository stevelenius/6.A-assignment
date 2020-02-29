// 6.A-assignment-vue.js
//
// Kicking the tires on Vue.js
// 

var myLlamaFacts = new Vue({
  el: "#myLlamaFacts",
  data: {
// We are using HTML entities for quotes and apostrophes in some of the facts below.
// Special provisions have been made in the HTML file to allow these entities to display properly.
    fact1: "Carlson&rsquo;s Llovable Llamas (carlsonsllovablellamas.com) is a llama farm just east of Waconia, Minnesota. They have provided these llama facts.",
    fact2: "Llamas are related to camels, although llamas don&rsquo;t have humps.",
    fact3: "Llamas are nicknamed &ldquo;Camel of the Clouds&rdquo; because they are native to Andean mountains of Argentina and Peru.",
    fact4: "In order to be able to live at such high altitudes where the air is very thin and has little oxygen, llamas evolved to have more red blood cells per unit volume of blood than any other mammal.",
    fact5: "Newborn llamas are known as &ldquo;crias&rdquo; (&ldquo;cria&rdquo; means &ldquo;baby&rdquo; in Spanish) and weigh between 20 and 30 pounds.",
    fact6: "Crias attempt to stand, walk and nurse shortly after birth.",
// fact7 can be made to disappear by changing showF7 below to false.
    fact7: "A full-grown llama weighs between 290 and 450 lbs. <em>(If show7 is changed to false, this fact will disappear and the rest of the facts will renumber. The subhead will also change to reflect the fact that nine facts are visible instead of ten.)</em>",
    fact8: "Llamas are very intelligent and can learn simple tasks after just a few repetitions.",
    fact9: "Llamas are gentle, curious and friendly and most will approach people easily.",
    fact10: "Unlike sheep wool, llama wool does not contain lanolin.",
// Change showF7 to false to make fact7 disappear. The rest of the facts will renumber.
// The subhead will also change to read "Nine Facts About Llamas".
    showF7: true
  }
});