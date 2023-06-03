import Card from 'react-bootstrap/Card';
import {Row} from "react-bootstrap";
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
            <Row lg="6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-cloud text-white " viewBox="0 0 16 16">
                <path
                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-cloud text-white " viewBox="0 0 16 16">
                <path
                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
            </svg>
            </Row>

        </>
    );
}


{/*<Image src={Cloud} alt="cloud" />*/}


export default ProfilePost;