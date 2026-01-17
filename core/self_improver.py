class SelfImprover:
    def improve(self, agent, results):
        agent.learn(results)
        return "Agent improved via feedback loop"
