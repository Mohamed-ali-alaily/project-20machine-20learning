import streamlit as st
import pandas as pd
import pickle

# Load model and preprocessor
with open("customer_satisfaction_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("customer_satisfaction_preprocessor.pkl", "rb") as f:
    preprocessor = pickle.load(f)

st.title("Customer Satisfaction Prediction")
st.write("Web application for predicting customer satisfaction")

# Inputs
gender = st.selectbox("Gender", ["Male", "Female"])
customer_type = st.selectbox("Customer Type", ["Loyal Customer", "disloyal Customer"])
age = st.slider("Age", 7, 85, 30)
travel_type = st.selectbox("Type of Travel", ["Business travel", "Personal Travel"])
flight_class = st.selectbox("Class", ["Eco", "Eco Plus", "Business"])
flight_distance = st.number_input("Flight Distance", min_value=0)
wifi = st.slider("Inflight Wifi Service", 0, 5, 3)
online_boarding = st.slider("Online Boarding", 0, 5, 3)
seat_comfort = st.slider("Seat Comfort", 0, 5, 3)
departure_delay = st.number_input("Departure Delay in Minutes", min_value=0)
arrival_delay = st.number_input("Arrival Delay in Minutes", min_value=0)

# Create input dataframe (must match column names)
input_df = pd.DataFrame({
    "Gender": [gender],
    "Customer Type": [customer_type],
    "Age": [age],
    "Type of Travel": [travel_type],
    "Class": [flight_class],
    "Flight Distance": [flight_distance],
    "Inflight wifi service": [wifi],
    "Online boarding": [online_boarding],
    "Seat comfort": [seat_comfort],
    "Departure Delay in Minutes": [departure_delay],
    "Arrival Delay in Minutes": [arrival_delay]
})

if st.button("Predict"):
    # Transform input data using preprocessor
    input_processed = preprocessor.transform(input_df)
    
    # Make prediction
    prediction = model.predict(input_processed)[0]

    # Display result
    result = "Satisfied" if prediction == 1 else "Neutral or Dissatisfied"
    st.success(f"Prediction: {result}")

