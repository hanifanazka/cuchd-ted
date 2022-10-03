import img from "../Assests/Tedx1.png"
import "./Home.css"

export default function About() {
  return (
    <>
      <div className="aboutp" id="about">
        {/* <section >
          <p>Lorem ipsum dolor sit amet. Ut maiores enim ad consequatur reiciendis aut veritatis voluptatem et fugiat quisquam est 
            eligendi beatae ea laboriosam vitae ut similique tenetur. Qui odit molestias et assumenda repellat ea minima nemo eos 
            quidem accusantium aut aliquid molestias.Sit adipisci dolorem est commodi molestiae est galisum consequatur id internos 
            aperiam ad eaque autem. Est dolore maxime ex reprehenderit optio sit iste quas qui sunt expedita ea minima aliquam ab sunt neque.
            Est sunt qui rerum voluptate ut animi nihil est molestias necessitatibus? Et accusamus corrupti ex nulla voluptas a 
            soluta voluptatem et quia architecto non rerum debitis est autem consequuntur. 33 mollitia iste qui ipsam culpa et cumque mollitia aut quia necessitatibus?</p>
        </section> */}
        <div style={{ margin: "auto" }}>
          <img src={img}
            width={"100%"} />
        </div>
        {/* <section>
          <img src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"} />
        </section> */}
        <section >
          <h3>What is TedX</h3>
          <p>In keeping with TED's broader mission to discover and investigate "ideas worth spreading," a grassroots initiative known as TEDx was created. TED is made accessible to local communities across the globe through TEDx events. These events are organised by enthusiastic individuals who are motivated to expand their knowledge and spread the most recent discoveries in their areas. TEDx events are independently organised TED Talks that include both live speakers and previously broadcast TED Talks. These regional, independently run events go under the name TEDx, where x stands for independently run TED event. The TED Conference offers broad guidelines for the TEDx programme, but each TEDx event is independently planned.</p>
        </section>
        <section>
          <h3>What is Ted</h3>
          <p>A non-profit organisation called TED, which stands for Technology, Entertainment, and Design, offers live presentations dedicated to the dissemination of information-driven ideas. Regarding the fields it works with, it caters to a range of talking points, which may be expanded to any practical abstraction from noteworthy experiences. Each shared experience is simultaneously very specific to the goal and concrete about the problem. Talks with a purpose and informational content were what TED used as inspiration to bring it to life and to the public.
          It's a perception of all the elements of an account, and one is truly guided by the story's progression, serving the purpose of the planned big or little tangible change.</p>
        </section>
        <section>
          <h3>What is TEDx Chandigarh University </h3>
          <p>Lorem ipsum dolor sit amet. Ut maiores enim ad consequatur reiciendis aut veritatis voluptatem et fugiat quisquam est
            eligendi beatae ea laboriosam vitae ut similique tenetur. Qui odit molestias et assumenda repellat ea minima nemo eos
            quidem accusantium aut aliquid molestias.Sit adipisci dolorem est commodi molestiae est galisum consequatur id internos
            aperiam ad eaque autem. Est dolore maxime ex reprehenderit optio sit iste quas qui sunt expedita ea minima aliquam ab sunt neque.
            Est sunt qui rerum voluptate ut animi nihil est molestias necessitatibus? Et accusamus corrupti ex nulla voluptas a
            soluta voluptatem et quia architecto non rerum debitis est autem consequuntur. 33 mollitia iste qui ipsam culpa et cumque mollitia aut quia necessitatibus?</p>
        </section>

      </div>
    </>
  )
}