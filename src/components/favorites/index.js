import {Box} from "@mui/system";
import {Colors} from "../../styles/theme";
import {
    Avatar,
    Button,
    Divider,
    Drawer,
    Paper,
    Typography
} from '@mui/material';
import {useUIContext} from "../../context/ui";

export default function Favorites() {
    const {favorites, setShowFavorites, showFavorites} = useUIContext();
    const favoritesContent = favorites.map(item => (
        <Box key = {item.id}>
            <Box display="flex" sx ={{pt:2, pb : 2}}
                 alignItems="start"
                 justifyContent={"space-between"}>
                <Avatar src = {item.image} sx ={{width : 96, height :96, mr : 2}} />
                <Box display="flex" flexDirection={"column"}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="subtitle2">{item.description}</Typography>
                </Box>
                <Typography variant="body1" justifyContent={"end"}>${item.price}</Typography>
            </Box>
            <Divider variant="inset" />
        </Box>
    ));

    return (
        <Drawer
            open = {showFavorites}
            onClose = {() => setShowFavorites(false)}
            anchor="right"
            PaperProps={{sx : {
                    width:500, background: Colors.light_gray, borderRadius: 0
                },}}>


            <Box
                sx ={{p:4}}
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems = "center"
            >
                <Typography variant="h3" color = {Colors.black}>
                    Favorites
                </Typography>

                <Paper elevation ={0}
                       sc ={{mt :2, width : '90%', padding :4,}}>
                    {favoritesContent}
                </Paper>
            </Box>
        </Drawer>
    );
}
