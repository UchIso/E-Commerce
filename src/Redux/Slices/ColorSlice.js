import { createSlice } from "@reduxjs/toolkit";

const ColorState = {
    colors:{
        ConteinerD: "#3F3F3F",
        ContentD: "#3C3C3C",
        HeaderD: "#C7C8C2",
        ShadowD: "#5F5F5F",
        TextD: "#0A0A0A",
        BorderD: "#1A1A1A",

        ConteinerL: "#1A1A1A",
        ContentL: "#1D1D1D",
        HeaderL: "#5F5F5F",
        ShadowL: "#C7C8C2",
        TextL: "#E6E7E1",
        BorderL: "#1F1F1F",
        
        Conteiner: "#3F3F3F",
        Content: "#3C3C3C",
        Header: "#C7C8C2",
        Shadow: "#5F5F5F",
        Text: "#0A0A0A",
        Border: "#1A1A1A",

        TextS: "#7F7F7F",
        BorderS: "#7F7F7F",
    },
    Mode:true,
}

export const ColorSlice = createSlice({
    name:"Basket",
    initialState:ColorState,
    reducers:{
        ChangeTheme:(state)=>{
            if(state.Mode){
                const {ConteinerL , ContentL , HeaderL , ShadowL , TextL , BorderL } = state.colors
                let {Conteiner , Content , Header , Shadow , Text , Border } = state.colors

                Conteiner = ConteinerL
                Content = ContentL
                Header = HeaderL
                Shadow = ShadowL
                Text = TextL
                Border = BorderL
                
                state.Mode = !state.Mode
            }else{
                const {ConteinerD , ContentD , HeaderD , ShadowD , TextD , BorderD } = state.colors
                let {Conteiner , Content , Header , Shadow , Text , Border } = state.colors

                Conteiner = ConteinerD
                Content = ContentD
                Header = HeaderD
                Shadow = ShadowD
                Text = TextD
                Border = BorderD

                state.Mode = !state.Mode
            }
        }
    }
})

export const {ChangeTheme} = ColorSlice.actions
export default ColorSlice.reducer