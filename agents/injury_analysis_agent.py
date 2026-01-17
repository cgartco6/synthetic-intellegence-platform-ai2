class InjuryAgent:
    def assess(self, body_part, load):
        if load > 8:
            return f"High injury risk for {body_part}"
        return f"Safe load for {body_part}"
