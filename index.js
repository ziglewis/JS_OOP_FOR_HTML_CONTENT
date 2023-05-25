

let mother = document.querySelector("main")

console.log(mother)

let section4 = [
                { name: "Ada....1",
                  quote: "I am a child of God",
                  Prayer: "I will never let you go unless you bless me"
                  },
                  { name: "Obi...2",
                  quote: "I am a man of God all my life",
                  Prayer: "I will never let God go no matter what happens unless He bless me"
                  },
                  { name: "AGU...3",
                  quote: "I am a real child of God indeed",
                  Prayer: "Oh Lord that thou mayest enlarge my coast"
                  }, 

                  { name: "Jay...4",
                  quote: "I am a real child of God indeed",
                  Prayer: "Oh Lord that thou mayest enlarge my coast"
                  },
                  { name: "EDU...5",
                  quote: "I am a real child of God indeed",
                  Prayer: "Oh Lord that thou mayest enlarge my coast"
                  },  
                ]
                    
                   let display = data => {
                        
                       let  answer= `<div class="box">
                            <h1> ${data.name} </h1>
                            <p> ${data.quote} </p>
                            <br>
                            <h2> <a href="https://bard.google.com/" target= "_blank"> ${data.Prayer} </a></h2>
                            <p> <i> Thank you! </i> </p>  
                            
                            </div> `

                    //  console.log(answer)
                     mother.innerHTML += answer
                    }
                    
                  section4.forEach(display)
                  
                //   mother.innerHTML += section4.forEach(display)