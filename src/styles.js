import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    inputContainerWidth: {
      width: 300
    },
    buttonWidth: {
      width: 100,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft:30
    },
    listItem:{
      marginBottom:20,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    buttonContainer:{
      width: '50%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    }
  }));

  export default useStyles;