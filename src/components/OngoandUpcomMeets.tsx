import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";

function OngoandUpcomMeets() {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>Ongoing/Upcoming Meetings</IonCardTitle>
			</IonCardHeader>

			<IonCardContent>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Meeting 1</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>This is the content for Meeting 1.</IonCardContent>
				</IonCard>

				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Meeting 2</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>This is the content for Meeting 2.</IonCardContent>
				</IonCard>
			</IonCardContent>
		</IonCard>
	);
}

export default OngoandUpcomMeets;
