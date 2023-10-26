import "./About.scss";
function About() {
    return (
        <div className="wrapper">
            <div className="about">
                <div className="about__row">
                    <div className="about__column">
                        <div className="about__text">
                            <h2>About me</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus feugiat mauris non
                                sapien rutrum, at hendrerit sem rutrum.
                                Pellentesque tempus ipsum id mauris auctor
                                semper. Nulla facilisi. Sed eu feugiat mi. Sed
                                commodo vulputate sodales. Sed tristique nisl
                                nunc, vel tempor mauris pharetra non. Phasellus
                                vitae elementum libero.
                            </p>
                            <p>
                                Etiam gravida ligula at dolor accumsan, quis
                                lobortis felis porttitor. Sed accumsan mollis
                                arcu a blandit. Donec non aliquam turpis. Proin
                                sed mattis nibh. Nam sit amet ultricies justo.
                                Curabitur consectetur finibus fermentum.
                                Praesent ante dolor, euismod sit amet pretium
                                vel, suscipit vel mi. Sed ut risus auctor,
                                suscipit tellus quis, cursus eros. In egestas
                                elementum vulputate.
                            </p>
                            <p>
                                Fusce a vulputate ligula. Nulla a ante
                                facilisis, luctus est non, euismod nunc. Nunc
                                commodo diam tellus, ut rhoncus turpis ultricies
                                sed. Sed et tempor velit. Sed aliquet dolor a
                                purus viverra, ut malesuada eros bibendum. Duis
                                consectetur consequat nibh, non volutpat nulla
                                cursus in. Proin tristique ornare leo a
                                tristique.
                            </p>
                        </div>
                    </div>
                    <div className="about__column">
                        <div className="about__image">
                            <img
                                src="https://eus-www.sway-cdn.com/s/9WdfXuGcIa7wG2VR/images/oTe5OYoPwIPm4A?quality=1280&allowAnimation=true"
                                alt="Flower shop"
                            />
                        </div>
                        <div className="about__addres">
                            <a
                                href="http://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1600 Pennsylvania Avenue, Washington, D.C. 20500
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
