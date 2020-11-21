import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
  CheckBox,
  Text,
  Switch,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import ImagePicker from "../components/ImagePicker";

import HeaderButton from "../components/UI/HeaderButton";
import * as productsActions from "../store/actions/products";
import Input from "../components/UI/Input";
import Colors from "../constants/Colors";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const EditProductScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const [error, setError] = useState();
  var prodId = null;
  if (props.route.params !== undefined) {
    props.route.params.productId == undefined
      ? (prodId = null)
      : (prodId = props.route.params.productId);
  }

  const editedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === prodId)
  );

  useEffect(() => {
    if (editedProduct != undefined && editedProduct != null) {
      setIsAvailable(editedProduct.available == 1 ? true : false);
      setIsGlutenFree(editedProduct.glutenFree == 1 ? true : false);
      setIsLactoseFree(editedProduct.lactoseFree == 1 ? true : false);
      setIsVegan(editedProduct.vegan == 1 ? true : false);
      setIsVegetarian(editedProduct.vegetarian == 1 ? true : false);
    }
  }, [editedProduct]);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : "",
      imageurl: editedProduct ? editedProduct.imageurl : "",
      description: editedProduct ? editedProduct.description_product : "",
      price: editedProduct ? editedProduct.price : "",
      ingredients: editedProduct ? editedProduct.ingredients : "",
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageurl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
      ingredients: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      if (editedProduct) {
        await dispatch(
          productsActions.updateProduct(
            formState.inputValues.title,
            formState.inputValues.description,
            formState.inputValues.imageurl,
            formState.inputValues.ingredients,
            +formState.inputValues.price,
            editedProduct.id,
            isAvailable,
            isVegetarian,
            isGlutenFree,
            isLactoseFree,
            isVegan
          )
        );
      } else {
        await dispatch(
          productsActions.createProduct(
            formState.inputValues.title,
            formState.inputValues.description,
            formState.inputValues.imageurl,
            formState.inputValues.ingredients,
            +formState.inputValues.price,
            isAvailable,
            isVegetarian,
            isGlutenFree,
            isLactoseFree,
            isVegan
          )
        );
      }
      props.navigation.goBack();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, [
    dispatch,
    prodId,
    formState,
    isAvailable,
    isVegetarian,
    isGlutenFree,
    isLactoseFree,
    isVegan,
  ]);

  useEffect(() => {
    props.navigation.setParams({ FnSubmit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="title"
            label="Title"
            errorText="Please enter a valid title!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.title : ""}
            initiallyValid={!!editedProduct}
            required
          />

          <ImagePicker
            id="imageurl"
            label="Image Url"
            errorText="Please enter a valid image url!"
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.imageurl : ""}
            value={formState.inputValues.imageurl}
            initiallyValid={!!editedProduct}
            required
          />
          <Input
            id="price"
            label="Price"
            errorText="Please enter a valid price!"
            keyboardType="decimal-pad"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.price : ""}
            initiallyValid={!!editedProduct}
            required
            min={0.1}
          />

          <Input
            id="description"
            label="Description"
            errorText="Please enter a valid description!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            onInputChange={inputChangeHandler}
            initialValue={
              editedProduct ? editedProduct.description_product : ""
            }
            initiallyValid={!!editedProduct}
            minLength={5}
          />

          <Input
            id="ingredients"
            label="Ingredientes"
            errorText="Please enter a valid Ingredients!"
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.ingredients : ""}
            initiallyValid={!!editedProduct}
            minLength={5}
          />

          <FilterSwitch
            label="Se Encuentra Disponible"
            state={isAvailable}
            onChange={(newValue) => setIsAvailable(newValue)}
          />

          <View style={styles.screen}>
            <Text style={styles.title}>Categorias</Text>
            <FilterSwitch
              label="Libre De Glutten"
              state={isGlutenFree}
              onChange={(newValue) => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
              label="Libre De Lactosa"
              state={isLactoseFree}
              onChange={(newValue) => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
              label="Es Vegano"
              state={isVegan}
              onChange={(newValue) => setIsVegan(newValue)}
            />
            <FilterSwitch
              label="Es Vegetariano"
              state={isVegetarian}
              onChange={(newValue) => setIsVegetarian(newValue)}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = (navData) => {
  const sb =
    navData.route.params !== undefined ? navData.route.params.FnSubmit : null;
  return {
    headerTitle: "EditProduct",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={sb}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  form: {
    margin: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProductScreen;
