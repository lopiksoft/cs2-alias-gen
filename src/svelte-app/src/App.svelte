<script>
	  import AliasGenerator from './AliasGenerator.svelte';

	// You can add any Svelte-specific JavaScript here
  </script>
  
  <style>
	/* Global Styles */
	body {
	  font-family: 'Arial', sans-serif;
	  margin: 0;
	  padding: 0;
	  background-color: #f4f4f4;
	  color: #333;
	}
  
	/* Header Styles */
	.header {
	  background-color: #1a1a1a;
	  color: white;
	  padding: 10px 0;
	  text-align: center;
	}
  
	/* Content Styles */
	.content {
	  padding: 20px;
	  max-width: 800px;
	  margin: auto;
	}
  
	/* Section Styles */
	.section {
	  margin-bottom: 20px;
	}
  
	/* Footer Styles */
	.footer {
	  background-color: #1a1a1a;
	  color: white;
	  text-align: center;
	  padding: 10px 0;
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	}
  
	a {
	  color: #007bff;
	  text-decoration: none;
	}
  
	a:hover {
	  text-decoration: underline;
	}
  </style>
  
  <div class="header">
	<h1>CS2 Alias Generator</h1>
  </div>
  
  <div class="content">
	<div class="section">
	  <h2>About This Tool</h2>
	  <p>This utility helps gamers create custom chat aliases for Counter-Strike 2, enhancing their gaming experience with personalized and fun messages.</p>
	</div>

	  <!-- Alias Generator Section -->
	  <div class="section">
		<AliasGenerator />
	  </div>
  
	<!-- Additional sections for socials, GitHub, and donation can be added here -->
	<div class="section">
	  <h2>Connect with Me</h2>
	  <p>Follow me on social media for more updates and tools like this:</p>
	  <a href="YOUR_TWITTER_LINK" target="_blank">Twitter</a> | 
	  <a href="YOUR_FACEBOOK_LINK" target="_blank">Facebook</a> | 
	  <a href="YOUR_INSTAGRAM_LINK" target="_blank">Instagram</a>
	</div>
  
	<div class="section">
	  <h2>Source Code</h2>
	  <p>The source code for this tool is available on GitHub:</p>
	  <a href="https://github.com/lopiksoft/cs2-alias-gen" target="_blank">GitHub Repository</a>
	</div>
  
	<div class="section">
	  <h2>Support My Work</h2>
	  <p>If you find this tool helpful, consider supporting me:</p>
	  <a href="YOUR_DONATION_LINK" target="_blank">Donate</a>
	</div>
  </div>
  
  <div class="footer">
	<p>&copy; 2024 karolswdev. All Rights Reserved.</p>
  </div>