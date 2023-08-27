import React, {useState} from "react";
import { View, Text,  ScrollView, RefreshControl } from "react-native";

export default function() {

    const [atualizando,setAtualizando]=useState(false)
    function aoAtualizar(){
        setAtualizando(true);
        setTimeout(()=>{setAtualizando(false)},3000);
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView 
                style={{backgroundColor: '#88f', padding: 15}}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <Text style={{color:'#eee'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lectus ac libero tempus, id feugiat libero pulvinar. Donec vehicula elementum tellus, id scelerisque justo sagittis nec. Sed pellentesque accumsan mauris, pharetra malesuada neque bibendum sed. Mauris in ex sit amet odio tempus feugiat non a nisl. Duis tincidunt quam eget purus iaculis, et malesuada diam aliquam. Pellentesque ligula lectus, rutrum sed lectus vitae, pharetra gravida augue. Pellentesque consequat diam vitae purus convallis, sed consequat turpis efficitur. Ut convallis ante et nunc mollis faucibus. Morbi velit elit, suscipit et orci non, rutrum porttitor ipsum. Ut congue elit non erat semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lectus ac libero tempus, id feugiat libero pulvinar. Donec vehicula elementum tellus, id scelerisque justo sagittis nec. Sed pellentesque accumsan mauris, pharetra malesuada neque bibendum sed. Mauris in ex sit amet odio tempus feugiat non a nisl. Duis tincidunt quam eget purus iaculis, et malesuada diam aliquam. Pellentesque ligula lectus, rutrum sed lectus vitae, pharetra gravida augue. Pellentesque consequat diam vitae purus convallis, sed consequat turpis efficitur. Ut convallis ante et nunc mollis faucibus. Morbi velit elit, suscipit et orci non, rutrum porttitor ipsum. Ut congue elit non erat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lectus ac libero tempus, id feugiat libero pulvinar. Donec vehicula elementum tellus, id scelerisque justo sagittis nec. Sed pellentesque accumsan mauris, pharetra malesuada neque bibendum sed. Mauris in ex sit amet odio tempus feugiat non a nisl. Duis tincidunt quam eget purus iaculis, et malesuada diam aliquam. Pellentesque ligula lectus, rutrum sed lectus vitae, pharetra gravida augue. Pellentesque consequat diam vitae purus convallis, sed consequat turpis efficitur. Ut convallis ante et nunc mollis faucibus. Morbi velit elit, suscipit et orci non, rutrum porttitor ipsum. Ut congue elit non erat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lectus ac libero tempus, id feugiat libero pulvinar. Donec vehicula elementum tellus, id scelerisque justo sagittis nec. Sed pellentesque accumsan mauris, pharetra malesuada neque bibendum sed. Mauris in ex sit amet odio tempus feugiat non a nisl. Duis tincidunt quam eget purus iaculis, et malesuada diam aliquam. Pellentesque ligula lectus, rutrum sed lectus vitae, pharetra gravida augue. Pellentesque consequat diam vitae purus convallis, sed consequat turpis efficitur. Ut convallis ante et nunc mollis faucibus. Morbi velit elit, suscipit et orci non, rutrum porttitor ipsum. Ut congue elit non erat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lectus ac libero tempus, id feugiat libero pulvinar. Donec vehicula elementum tellus, id scelerisque justo sagittis nec. Sed pellentesque accumsan mauris, pharetra malesuada neque bibendum sed. Mauris in ex sit amet odio tempus feugiat non a nisl. Duis tincidunt quam eget purus iaculis, et malesuada diam aliquam. Pellentesque ligula lectus, rutrum sed lectus vitae, pharetra gravida augue. Pellentesque consequat diam vitae purus convallis, sed consequat turpis efficitur. Ut convallis ante et nunc mollis faucibus. Morbi velit elit, suscipit et orci non, rutrum porttitor ipsum. Ut congue elit non erat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lectus ac libero tempus, id feugiat libero pulvinar. Donec vehicula elementum tellus, id scelerisque justo sagittis nec. Sed pellentesque accumsan mauris, pharetra malesuada neque bibendum sed. Mauris in ex sit amet odio tempus feugiat non a nisl. Duis tincidunt quam eget purus iaculis, et malesuada diam aliquam. Pellentesque ligula lectus, rutrum sed lectus vitae, pharetra gravida augue. Pellentesque consequat diam vitae purus convallis, sed consequat turpis efficitur. Ut convallis ante et nunc mollis faucibus. Morbi velit elit, suscipit et orci non, rutrum porttitor ipsum. Ut congue elit non erat semper.  
                </Text>
            </ScrollView>

        </View>
    )
}