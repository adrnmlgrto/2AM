import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

//---------------HOMESCREEN
function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require("./assets/bg.png")} style={styles.imageBG}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          style={styles.logoStyle}
          source={require("./assets/logo2AM.png")}
        />
      </View>

      <View>
        <Text style={styles.txtStyle}>Welcome!</Text>
      </View>

      <View>
        <Text style={styles.txtStyle2}>Want to know more about </Text>
        <Text style={styles.txtStyle2}>interior design?</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.3}
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Designs")}
      >
        <Text style={{ color: "white", fontFamily: "sans-serif-light" }}>
          Let's go!
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

//---------------DESIGNSCREEN
function DesignScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle}>
          Here at 2AM home interior designs, we do not just give you quality
          designs, but also world-class service. Click below for more!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.designTitle2}>Contact us now!</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Featured")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/hollywood1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 30,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Featured Design
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Bohemian")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/boh1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Bohemian Beauty
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Contemporary")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/contemp1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Contemporary Cheer
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Industrial")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/indus1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Industrial Edge
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Minimalist")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/mini1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Minimalist Musings
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Modern")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/modern1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Modern Marvel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Retro")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/retro1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Retro Fun
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Scandinavian")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/scan1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Scandinavian Flavour
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Traditional")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/trad1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Traditional Touch
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRounded}>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("Transitional")}
          >
            <Image
              style={styles.cardImage}
              source={require("./assets/trans1.jpg")}
            ></Image>
            <Text
              style={{
                color: "white",
                fontFamily: "sans-serif-light",
                fontSize: 22,
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              Transitional Truth
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

//---------------FEATUREDSCREEN
function FeaturedScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>FEATURED DESIGN OF THE MONTH</Text>
        <Text style={styles.paragraphDesign}>
          The Hollywood Regency style is all about bringing back the glamour of
          the 1930s’ Golden Age of the booming American movie industry. It
          features the lavish décor style of the homes of the major film stars
          of those times. Yet even if it relates to the past, it is far from
          being branded as ‘retro’.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/hollywood1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/hollywood2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/hollywood3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------BOHEMIANSCREEN
function BohemianScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Bohemian Beauty</Text>
        <Text style={styles.paragraphDesign}>
          If you fancy something more carefree, Boho interior design is your
          friend. Purposefully messy, this style— with its global inspirations,
          travel mementos and op shop finds— provides a warm ambience. Beaded
          embellishments, tassels and crochet curtains are all whimsical
          additions to the Boho interior decor style.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/boh1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/boh2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/boh3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------CONTEMPCREEN
function ContemporaryScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Contemporary Cheer</Text>
        <Text style={styles.paragraphDesign}>
          Contemporary and modern interior design themes often get confused.
          This is the interior design style for those who love to follow fashion
          trends and change with the times. Right now in the world of
          contemporary art and design we are loving the simplicity of whites,
          greys and blondes with the excitement of occasional colour.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/contemp1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/contemp2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/contemp3.jpeg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------INDUSTSCREEN
function IndustrialScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Industrial Edge</Text>
        <Text style={styles.paragraphDesign}>
          Industrial takes advantage of exposed steel, timber and brick to
          create an edgy living space that’s full of character. It preserves the
          best quality design of the turn of the 20th century and brings out all
          its raw beauty and mercurial appeal. Industrial interior design themes
          offer a unisex vibe that suits larger spaces, both at home or the
          office.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/indus1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/indus2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/indus3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------MINISCREEN
function MinimalistScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Minimalist Musings</Text>
        <Text style={styles.paragraphDesign}>
          Perhaps it’s because it’s easy to keep clean, but it’s actually a
          houseproud interior design style like any other defined by simple
          furnishings, neutral colour palettes and clean lines. However, it does
          not mean it’s devoid of style. When art is selected with care, the
          “less is more” mindset respects creativity, but shuns flamboyant
          excesses and unmanageable clutter.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/mini1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/mini2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/mini3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------MODERNSCREEN
function ModernScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Modern Marvel</Text>
        <Text style={styles.paragraphDesign}>
          Modern is a broad design term that typically refers to a home with
          clean, crisp lines, a simple colour palette and the use of materials
          that can include metal, glass and steel. Modern design employs a sense
          of simplicity in every element, including furniture.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/modern1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/modern2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/modern3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------RETROSCREEN
function RetroScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Retro Fun</Text>
        <Text style={styles.paragraphDesign}>
          The psychedelic art of today requires far less drugs, despite being
          inspired by the wayward psychedelic era of the sixties. Retro design
          is all about good, clean fun. Using pops of colour in art, furnishings
          and ornaments will lift spirits and inspire happiness. And as an
          interior design style it’s a bit sexy.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/retro1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/retro2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/retro3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------SCANDSCREEN
function ScandinavianScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Scandinavian Flavour</Text>
        <Text style={styles.paragraphDesign}>
          Inspired by the simplicity of Nordic life, Scandinavian design has
          become an artform in itself. It takes to crafting something stylish
          and cutting edge to functional and simple. To that end, white and
          blonde colour palettes are typical of Scandi with splashes of elements
          from nature such as furs, leathers and natural fibres.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/scan1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/scan2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/scan3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------TRADSCREEN
function TraditionalScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Traditional Truth</Text>
        <Text style={styles.paragraphDesign}>
          Traditional design style offers classic details, sumptuous
          furnishings, and an abundance of accessories. Traditional homes often
          feature dark, finished wood, rich colour palettes, and a variety of
          texturesand curved lines. Furnishings have elaborate and ornate
          details and fabrics, like velvet, silk and brocade, which may include
          a variety of patterns and textures.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/trad1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/trad2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/trad3.jpg")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------TRANSSCREEN
function TransitionalScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <View style={styles.designTitleBG}>
        <Text style={styles.designTitle3}>Transitional Truth</Text>
        <Text style={styles.paragraphDesign}>
          A transitional design may incorporate modern materials, such as steel
          and glass, and then unite them with plush furnishings. Transitional
          design also includes relatively neutral colour palettes, creating a
          calming and relaxed space that manages to feel both stylish and sleek,
          as well as warm and inviting.
        </Text>
      </View>
      <ScrollView>
        <Image
          style={styles.picturesStyle}
          source={require("./assets/trans1.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/trans2.jpg")}
        />
        <Image
          style={styles.picturesStyle}
          source={require("./assets/trans3.png")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

//---------------BOOKSCREEN
function BookScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/bgPic.png")}
      style={styles.imageBG}
    >
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.bookDesign}>Let's get in touch!</Text>
          <Text style={styles.bookDesign2}>Fill in the form below</Text>
          <Text style={styles.bookDesign3}>
            and we'll get back to you soon.
          </Text>
          <View>
            <TextInput style={styles.txtInput} placeholder="Full Name" />
            <TextInput style={styles.txtInput} placeholder="Email Address" />
            <TextInput
              style={styles.mssgInput}
              placeholder="Write your message here..."
            />

            <TouchableOpacity
              activeOpacity={0.3}
              style={styles.touchDesign}
              onPress={() =>
                alert(
                  "Form submitted! Please allow 2-3 business days for response."
                )
              }
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "sans-serif-light",
                  fontSize: 15,
                }}
              >
                Get in touch
              </Text>
            </TouchableOpacity>

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginTop: 35,
                width: 290,
                marginLeft: 40,
              }}
            />
            <Text style={styles.contactDesign}>Contact Info</Text>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.icon}
                source={require("./assets/envelope.png")}
              />
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  marginLeft: 10,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Email
              </Text>
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  marginLeft: 8,
                  marginTop: 8,
                }}
              >
                info@2AM.com.ph
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                style={styles.icon}
                source={require("./assets/call.png")}
              />
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  marginLeft: 10,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Contact
              </Text>
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  marginLeft: 8,
                  marginTop: 8,
                }}
              >
                +63 28371921
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image style={styles.icon} source={require("./assets/pin.png")} />
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  marginLeft: 10,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Address
              </Text>
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  marginLeft: 8,
                  marginTop: 8,
                }}
              >
                83 Imperial, Harvard Suites
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "sans-serif-light",
                marginLeft: 113,
                marginTop: 45,
              }}
            >
              We'd love to hear from you!
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const Stack = createStackNavigator(); //Create stack navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#424b54",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "sans-serif-light",
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Designs" component={DesignScreen} />
        <Stack.Screen name="Featured" component={FeaturedScreen} />
        <Stack.Screen name="Bohemian" component={BohemianScreen} />
        <Stack.Screen name="Contemporary" component={ContemporaryScreen} />
        <Stack.Screen name="Industrial" component={IndustrialScreen} />
        <Stack.Screen name="Minimalist" component={MinimalistScreen} />
        <Stack.Screen name="Modern" component={ModernScreen} />
        <Stack.Screen name="Retro" component={RetroScreen} />
        <Stack.Screen name="Scandinavian" component={ScandinavianScreen} />
        <Stack.Screen name="Traditional" component={TraditionalScreen} />
        <Stack.Screen name="Transitional" component={TransitionalScreen} />
        <Stack.Screen name="Contact" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebcfb1",
    flex: 1,
  },

  txtStyle: {
    textAlign: "center",
    fontSize: 26,
    color: "#424b54",
    marginBottom: 20,
    fontFamily: "sans-serif-light",
  },

  txtStyle2: {
    textAlign: "center",
    fontSize: 18,
    color: "#424b54",
    fontFamily: "sans-serif-light",
  },

  logoStyle: {
    width: 130,
    height: 135,
    marginTop: 220,
    marginBottom: 10,
  },

  imageBG: {
    flex: 1,
  },

  btnStyle: {
    width: 90,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#424b54",
    marginTop: 25,
    fontFamily: "sans-serif-light",
  },

  designTitle: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-light",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  designTitle2: {
    fontSize: 15,
    textAlign: "center",
    color: "#ebcfb2",
    fontFamily: "sans-serif-light",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  designTitle3: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-light",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  paragraphDesign: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif-light",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },

  designTitleBG: {
    backgroundColor: "#424b54",
  },

  btnDesign: {
    width: 350,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#424b54",
    marginTop: 15,
    fontFamily: "sans-serif-light",
    fontSize: 30,
    marginBottom: 15,
  },

  picturesStyle: {
    height: 250,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 7.49,
    width: 380,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
  },

  container2: {
    backgroundColor: "white",
    width: 380,
    height: 800,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
  },

  bookDesign: {
    color: "#424b54",
    fontFamily: "sans-serif-light",
    alignSelf: "center",
    fontSize: 30,
    marginTop: 15,
  },

  bookDesign2: {
    fontSize: 15,
    textAlign: "center",
    color: "#424b54",
    fontFamily: "sans-serif-light",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
  },

  bookDesign3: {
    fontSize: 15,
    textAlign: "center",
    color: "#424b54",
    fontFamily: "sans-serif-light",
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 50,
  },

  txtInput: {
    padding: 10,
    width: 310,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 35,
    marginBottom: 10,
  },

  mssgInput: {
    padding: 12,
    width: 310,
    height: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 35,
    marginBottom: 10,
    textAlignVertical: "top",
  },

  touchDesign: {
    width: 130,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#424b54",
    marginTop: 5,
    fontFamily: "sans-serif-light",
    marginLeft: 40,
  },

  contactDesign: {
    color: "#424b54",
    fontFamily: "sans-serif-light",
    alignSelf: "center",
    fontSize: 25,
    marginTop: 18,
  },

  icon: {
    width: 40,
    height: 40,
    marginLeft: 50,
    marginTop: 15,
  },

  cardRounded: {
    width: 363,
    height: 230,
    backgroundColor: "#424b54",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    alignSelf: "center",
  },
  cardImage: {
    width: 363,
    height: 180,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignSelf: "center",
  },
});
