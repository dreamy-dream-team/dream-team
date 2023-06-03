import Card from 'react-bootstrap/Card';
import {Row} from "react-bootstrap";
// import Cloud from './images/cloud.jpg';

function ProfilePost() {
    return (
        <>
            <ul>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-person-fill-lock text-white" viewBox="0 0 16 16">
                    <path
                        d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                </svg>
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
            <Row lg="6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-cloud-arrow-up-fill text-white" viewBox="0 0 16 16">
                    <path
                        d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-cloud-arrow-down-fill text-white" viewBox="0 0 16 16">
                    <path
                        d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                </svg>
            </Row>

        </>
    );
}


{/*<Image src={Cloud} alt="cloud" />*/}


export default ProfilePost;