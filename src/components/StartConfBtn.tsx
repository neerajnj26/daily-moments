import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";
import {videocamOutline as videoIcon, add as addIcon} from 'ionicons/icons' 

const StartConfBtn: React.FC = () => {
	return (
		<IonButton className="start-conf-btn"
			size="large"
			style={{
			position:'fixed',
			bottom: '20px',
			right: '10px'	
		}} >
			<IonIcon  icon={videoIcon} className="start-conf-btn-icon" style={{fontSize: '30px'}} />
			<IonIcon icon={addIcon} style={{
				fontSize:'20px',
				position:'fixed', 
				left:'20px', 
				}}/>
			<IonLabel className="start-conf-btn-label">New</IonLabel>
		</IonButton>
	);
};

export default StartConfBtn;
