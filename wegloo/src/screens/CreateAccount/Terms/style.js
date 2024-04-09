import { StyleSheet } from "react-native";
import color from "../../../components/common/colors";

const styles = (height,width,portrait) => StyleSheet.create({
    container:{backgroundColor:color.white, flex:1,paddingTop:15},
    head :{padding:5,flexDirection:'row',width:'100%'},
    backButton :{alignItems:'flex-start',width:'10%'},
    TermsService :{justifyContent:'center',alignItems:'center',width:'80%'},
    TermsServiceText :{fontWeight:'500',fontSize:16,color:color.black},
    fistParagraph :{lineHeight:25, color:color.black},
    secondParagreaph :{lineHeight:25,marginTop:15, color:color.black},
});

export default styles