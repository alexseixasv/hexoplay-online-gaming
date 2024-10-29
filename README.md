
# Dice Betting Game

This project is a Dice Betting Game where users can bet on the outcome of a dice roll. The game interface is designed with Vue.js and styled using Tailwind CSS. The logic ensures that users experience a balanced betting system with slightly higher chances for the house.

## Features

- **Dynamic Prediction**: Users can set a number prediction for the dice roll, visualizing it as a slider.
- **Bet Options**: Players can bet whether the rolled dice number will be below or above their selected prediction.
- **Multiplier & Win Chance Calculation**: The game dynamically calculates the win multiplier and winning chances based on the user's prediction.
- **House Edge Logic**: Built-in logic to make the house win more often, with loss probabilities skewed to favor the house.
- **Balance Management**: Users have a visible balance that updates with each bet, showing wins and losses.

## Setup and Installation

To run this project locally, follow the steps below:

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-username/dice-betting-game.git
   ```

2. **Navigate to the Project Directory**:  
   ```bash
   cd dice-betting-game
   ```

3. **Install Dependencies**:  
   Ensure you have `Node.js` installed, then run:
   ```bash
   npm install
   ```

4. **Run the Application**:  
   Start the development server with:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## How to Play

1. **Adjust Your Prediction**: Use the slider to set a prediction between 1 and 100.
2. **Choose Your Bet Amount**: Specify the bet amount (minimum 1 USD).
3. **Select Your Bet Type**:
   - "Bet Lower" – You win if the rolled number is below your prediction.
   - "Bet Higher" – You win if the rolled number is above your prediction.
4. **Start the Game**: Click on "Start" to roll the dice and view the outcome. Your balance updates automatically.

### Game Logic

- **Prediction Slider**: Displays a 50% win chance visually, while internal odds are slightly skewed to favor the house.
- **Result Logic**: Bets have a weighted 85% chance of resulting in a loss.
- **Balance Update**: Bet results adjust the balance based on the win multiplier.

## File Structure

- **src/**  
  - **components/**: Vue components used in the game.
  - **composables/**: Custom hooks, including balance management.
- **public/**: Assets such as images and icons.
- **App.vue**: Main component rendering the game UI.
- **main.js**: Vue.js initialization and app configuration.

## Customization

- **House Edge**: You can modify the house edge by adjusting the `lossMargin` variable in `DiceComponent.vue`.
- **Styling**: Tailwind CSS classes can be modified for custom designs and themes.

## Technologies Used

- **Vue.js**: Front-end JavaScript framework
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Logic and functionality

## License

This project is open-source and available under the MIT License.