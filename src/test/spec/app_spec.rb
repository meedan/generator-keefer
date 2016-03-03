require 'selenium-webdriver'
require 'yaml'

describe 'app' do

  @driver = @config = nil

  def open_extension
    @driver.action.key_down(:control).send_keys('b').key_up(:control).perform
    sleep 5
    window = @driver.window_handles.last
    @driver.switch_to.window(window)
    sleep 5
  end

  before :each do
    @config = YAML.load_file('config.yml')

    Selenium::WebDriver::Chrome.driver_path = 'chromedriver'
  
    prefs = {
      extensions: {
        commands: {
          'linux:Ctrl+B' => {
            'command_name' => '_execute_browser_action',
            'extension' => @config['chrome_extension_id'],
            'global' => false
          }
        }
      }
    }
    
    @driver = Selenium::WebDriver.for :chrome, switches: ['--load-extension=../build/extension'], prefs: prefs
  end

  after :each do
    @driver.quit
  end

  context "chrome extension" do

    it "should open extension" do
      open_extension
    end

  end
end
