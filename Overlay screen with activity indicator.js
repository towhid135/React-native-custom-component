import {Wave} from 'react-native-animated-spinkit';
 
 <Modal
	transparent
	visible={props.isLogin}
	>
	<View style={styles.overlayViewStyle} >
		<Wave color='rgba(255,255,255,255)' size={60} />
	</View>
 </Modal>
 
 const styles = StyleSheet.create({
	 overlayViewStyle:{
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems:'center',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
         
    },
 )}