module.exports = {
	"credentials_path": "F:/iam/lbp.json", /*path to JSON file with your Access key ID and Secret access key of the user that you created for this installation*/
    "region": "eu-west-1", /*regions in which you want AWS  */
	
	"user_name": "lbp", /* name of the user that you created for this installation */
	"role_name": "LBP_role", /* name of the role for the created user */
	"install_policy_name": "LBP_install_policy", /* name of the install policy */
	"role_policy_name": "LBP_role_policy", /* name of the role policy */

	"domain_name": "lbp.example.com", /* domain name that will host this blog platform */
	"hosted_zone_id": "Z31EM********", /* copy Hosted Zone ID from Route53 for the upper domain, if you are using subdomain use the Zone ID from subdomains parent domain */

	"lambda_prefix": "LBP", /* prefix of the generated Lambda functions - to make sure that they won't clash with other functions that you might have already */
	"bucket_name": "lbp-myblog", /* name of S3 bucket for this platform - it will be generated by install script so make sure it doesn't exist already */
	"table_prefix": "LBP_myblog", /* prefix for DynamoDB tables - thay will be generated by install script so make sure they don't exist already */ 
	"api_gateway_name" : "LBP_myblog", /* name of API Gateway for this platform - it will be generated by install script so make sure it doesn't exist already */
	"api_gateway_deployment_name": "prod", /* name of API gateway deployment - you can leave that as it is */

	"cloudfront_comment": "AWS Lambda Blog Platform", /*required for locating already configured cloudfront distribution - do not change unless you want to make another blog*/
	"cloudfront_certificate_arn": "arn:aws:acm:us-east-1:128137337832:certificate/b870ad53-dea5-4ceb-aabc-**********", /* copy your certificate ARN here - certificate needs to be created in us-east-1*/
	"cloudfront_caller_reference": "lbp_cloudfront_caller_reference", /* change if you are using more than one LBPs */

	"api_gateway_stage_variables" : { /* you can edit all of those options later in API Gateway -> stages */
		"site_base_url": "https://lbp.example.com", /* full base path of your blog */
		
		"recaptcha_siteKey": "no_key", /* default template uses google recaptcha in contact form - paste your captcha site key here*/
		"recaptcha_privKey": "no_key", /* default template uses google recaptcha in contact form paste your captcha private key here*/
		"contact_send_email": "me@example.com", /* your email for contact field - make sure it is verified by AWS*/
		"disqus_subdomain": "my_disqus_subdomain", /* ___.disqus.com/embed.js - default template uses disqus for comments - create a disqus account and paste your subdomain here */

		/* DON'T EDIT */
		"template": "default",
		
		"articles_bucket_path": "static/articles",

		"objects_table": "",
		"posts_table": "",

		"articles_bucket": "",

		"admin_pass": "", /* password for your admin area - it gets auto generated - you can change it later in API Gateway -> stages */
		"token_name": "token",
		"signing_key": "" /* this is the key that it is used to sign your admin session token - it gets auto generated by install script*/
	}
}