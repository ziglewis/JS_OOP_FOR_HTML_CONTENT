


let myHeaderSection = document.querySelector("header")
let myMainSection = document.querySelector("main")

// console.log(myMainSection)


myHeaderSection.innerHTML =  `
                              <h1> <i>USING JS OBJECT LOOPING TO GENERATE INNER HTML CONTENT (BY: ZIGLEWIS)</i></h1>
                              `

let persons = [
                { name: "ADA....1",
                  quote: "I am a child of God",
                  Prayer: "I will never let you go unless you bless me dear Father."
                  },
                  { name: "OBI...2",
                  quote: "I am a man whom mercy said no",
                  Prayer: "I will never loose faith in God, no matter what comes my way or not."
                  },
                  { name: "AGU...3",
                  quote: "I am living by faith and faith alone",
                  Prayer: "Oh Lord that thou mayest enlarge my coast and bless me indeed."
                  }, 

                  { name: "MMA...4",
                  quote: "I am only saved by grace",
                  Prayer: "When the role is called up yonder, may I be there."
                  },
                  { name: "EDU...5",
                  quote: "I am born to be a blessing",
                  Prayer: "Oh to be like thee, precious Redeemer, everyday."
                  },  
                ]
                    
                   let getPersonsInformation = data => {
                        
                       let  answer= `<div class="box">
                            <h1> ${data.name} </h1>
                            <p> ${data.quote} </p>
                            <br>
                            <h2> <a href="https://github.com/ziglewis/JS_OOP_FOR_HTML_CONTENT" target= "_blank"> ${data.Prayer} </a></h2>
                            <p> <i> Thank you! </i> </p>  
                            
                            </div> `

                    //  console.log(answer)
                     myMainSection.innerHTML += answer
                    }
                    
                  persons.forEach(getPersonsInformation)
                  
                //   myMainSection.innerHTML += persons.forEach(getPersonsInformation)