import Card from 'react-bootstrap/Card';
import React from "react";
// import Cloud from './images/cloud.jpg';

function ProfilePost() {
    return (
        <>
            <ul>
                <img
                    alt=""
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <a className="text-white">Private</a>
            </ul>

            <Card>
                <Card.Body>
                    <Card.Title>Title for post</Card.Title>
                    <Card.Text>
                        In the dream, you find yourself trapped in a dark, eerie forest. The trees loom overhead, casting long, twisted shadows that seem to reach out for you. The air is heavy with a sense of foreboding, and you can't shake the feeling that something sinister is lurking nearby.

                        As you try to find your way out, the forest becomes increasingly labyrinthine, with the paths twisting and turning in on themselves. Every direction you take leads you deeper into the heart of the forest, further away from any semblance of safety.

                        Suddenly, you hear a rustling sound behind you. You turn around, but there's nothing there. The feeling of being watched intensifies, and your heart starts pounding in your chest. The rustling sound grows louder and closer, and you break into a panicked run, desperately trying to escape whatever is pursuing you.

                        No matter how fast you run or how hard you try to escape, the presence behind you seems to be getting closer. You can feel its breath on the back of your neck, sending shivers down your spine. Just as you're about to succumb to terror, you wake up, drenched in sweat and relieved that it was only a nightmare.

                        Remember, nightmares can vary greatly from person to person, and this is just one example. They often involve intense fear, helplessness, and a sense of imminent danger or threat.
                    </Card.Text>
                </Card.Body>
                <p className="text-center">#nightmare</p>
            </Card>

            <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}

        </>
    );
}


{/*<Image src={Cloud} alt="cloud" />*/}


export default ProfilePost;