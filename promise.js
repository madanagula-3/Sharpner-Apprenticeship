console.log('person1: shows ticket')
console.log('person2: show ticket')
console.log('person1: shows ticket')

        console.log('person2: shows ticket')

        const preMovie = async () => {

            // promise for ticket

            const promiseWifeBringingTickets = new Promise((resolve, reject) => {

                setTimeout(() => {

                    resolve('ticket')

                }, 3000)

            })



            const ticket = await promiseWifeBringingTickets;


            console.log(`wife: i have ${ticket}`)

            console.log('husband: then  should we go in ?')

            console.log('wife: no i am hungry')

            console.log('ok! i will quickly buy popcorn  for you')

           // popcorn promise to the wife

            const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'))

            const popcorn = await getPopcorn;

            console.log(`husband : i got some ${popcorn}`)

            console.log('husband: now should we go in ?');

            console.log('wife: no I need some butter on popcorn')

            // butter promise to the wife

            const getButter = new Promise((resolve, reject) => resolve('butter'))





            const butter = await getButter;





            console.log(`Ok!! i got some ${butter}`)

            console.log('anything else darling?')

            console.log('lets go in we are getting late ! but before going please buy a cold drink')

            console.log('ok i will buy ! and thankyou for reminder')





            // coldDrink promise to the wife

            const coldDrink = new Promise((resolve, reject)=>resolve('pepsi'))

           const getColdDrink = await coldDrink;

            console.log(`husband : i have purchased ${getColdDrink} cold drink , you like it`)

            console.log(`wife: ya i love ${getColdDrink} coldrink thankyou!`)

            console.log('husband : now lets go!')



        }

        preMovie().then((t)=>console.log('person3: shows ticket'))


        console.log('person4: shows ticket')

        console.log('person5: shows ticket')