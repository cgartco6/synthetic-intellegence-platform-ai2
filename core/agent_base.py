class Agent:
    def __init__(self, name, role):
        self.name = name
        self.role = role
        self.memory = []

    def think(self, input_data):
        raise NotImplementedError

    def act(self, thought):
        raise NotImplementedError

    def learn(self, feedback):
        self.memory.append(feedback)
