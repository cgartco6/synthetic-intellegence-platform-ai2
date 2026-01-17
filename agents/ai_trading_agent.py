class TradingAgent:
    def analyze_market(self, data):
        return "Bullish probability: 63%"

    def decide(self, signal):
        if "Bullish" in signal:
            return "BUY"
        return "HOLD"
