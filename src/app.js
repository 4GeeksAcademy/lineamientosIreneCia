
  
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];

  let domains = [];
  
  pronouns.forEach((pronoun) => {
    adjs.forEach((adj) => {
      nouns.forEach((noun) => {
        domains.push(`${pronoun}${adj}${noun}.com`)
      })
    })
  })
    
  

  
  //write your code here
  console.log(domains);
  console.log("Hello Rigo from the console!");

