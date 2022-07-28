import Hero from "./Hero";
import logo from "./images/cogwheel_nice_android.svg";
import Layout from "./Layout";


const Website = (props) => {

    // console.log(window.location.url);

    const url = window.location.pathname;
    console.log(url);

    return (
        <div>
            <Layout>
                <button onClick={() => window.location.pathname = "/"}>Dugme</button>
                {/* Da ne radimo ovo jer ima bolji nacin */}
                {url.length == 1 &&
                    <Hero 
                        title="This is a title"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        image={logo}
                    />
                }
                {url.includes("contacts") && <p>Contacts</p>}
                {url.includes("price") && <p>Price</p>}
                {url.includes("shop") && <p>Shop</p>}
                {url.includes("about") && <p>About</p>}
            </Layout>
        </div>
    )
}

export default Website;