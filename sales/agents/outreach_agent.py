class OutreachAgent:
    def generate_email(self, lead):
        return f"""
        Subject: AI Training Platform for {lead['org']}

        Hello {lead['contact']},

        SYNTHEDU enables autonomous AI-driven training
        with full offline deployment.

        Would you be open to a short demo?

        Regards,
        Rian
        """
