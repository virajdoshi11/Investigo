import { createNavigationContainerRef, CommonActions } from "@react-navigation/native";

// This function is used to get access to the navigation object when we might not
// have its(navigation objects) access, example: in Redux middleware
export const navigationRef = createNavigationContainerRef();

export async function navigate(routeName: string, params?: object) {
  navigationRef.isReady();
  if(navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export async function resetAndNavigate(routeName: string) {
  navigationRef.isReady();
  if(navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }]
    }))
  }
}

export async function goBack() {
  navigationRef.isReady();
  if(navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export async function prepareNavigation() {
  navigationRef.isReady();
}